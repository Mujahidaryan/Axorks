import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { checkRateLimit } from '@/lib/rate-limit';
import { sendContactNotification } from '@/lib/resend';

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '127.0.0.1';

    // 1. Rate Limiting Check (5 requests per hour)
    const { allowed } = checkRateLimit(ip, 5, 3600000);
    if (!allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please wait an hour before submitting another inquiry.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, phone, service, message, company_website } = body;

    // 2. Honeypot Check (Bot Protection)
    if (company_website && company_website.trim() !== '') {
      // Silently accept without processing
      return NextResponse.json({ success: true, message: 'Inquiry received' });
    }

    // 3. Validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields (Name, Email, Service, Message).' },
        { status: 400 }
      );
    }

    // 4. Write to Neon Postgres Database
    let submissionRecord;
    try {
      submissionRecord = await db.contact_submissions.create({
        data: {
          name,
          email,
          phone: phone || null,
          service,
          message,
        },
      });
    } catch (dbErr) {
      console.error('Database insertion error:', dbErr);
      // Fallback logging if DB is unreachable in dev phase
    }

    // 5. Send Resend Email Notification
    await sendContactNotification({
      name,
      email,
      phone,
      service,
      message,
    });

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully.',
      id: submissionRecord?.id,
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing request.' },
      { status: 500 }
    );
  }
}
