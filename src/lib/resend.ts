import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY || 're_mock');

export async function sendContactNotification({
  name,
  email,
  phone,
  service,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}) {
  const notificationEmail = process.env.NOTIFICATION_EMAIL || 'muhammad.mujahid.dev@gmail.com';
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Axorks Inquiry <onboarding@resend.dev>';

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [notificationEmail],
      subject: `[Axorks Consultation Lead] ${service} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #0B0C0F; color: #ECEAE4;">
          <h2 style="color: #C9A24B; border-bottom: 1px solid #16181D; padding-bottom: 10px;">New Consultation Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2E6FBD;">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Service Requested:</strong> ${service}</p>
          <div style="margin-top: 15px; padding: 15px; background-color: #16181D; border-left: 3px solid #C9A24B; border-radius: 4px;">
            <strong>Message:</strong><br/>
            ${message.replace(/\n/g, '<br/>')}
          </div>
          <p style="font-size: 12px; color: #8A8F98; margin-top: 20px;">Axorks Lead Dispatcher System</p>
        </div>
      `,
    });
    return { success: true, data };
  } catch (error) {
    console.error('Error sending email notification via Resend:', error);
    return { success: false, error };
  }
}
