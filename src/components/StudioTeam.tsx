import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { ArrowRight, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter } from '../router/Router';

export const StudioTeam: React.FC = () => {
  const { navigate } = useRouter();
  
  const founder = TEAM_MEMBERS.find(m => m.id === 'mujahid') || TEAM_MEMBERS[0];
  const featured = [
    TEAM_MEMBERS.find(m => m.id === 'yousaf-piryani'),
    TEAM_MEMBERS.find(m => m.id === 'faisal'),
    TEAM_MEMBERS.find(m => m.id === 'farwa')
  ].filter(Boolean) as typeof TEAM_MEMBERS;

  return (
    <section className="w-full bg-[#08080A] py-20 lg:py-28 border-b border-[rgba(146,157,167,0.14)]" id="studio-team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-2xl">
            <span className="font-mono-code text-[10px] font-bold tracking-widest uppercase text-[#E8B923] mb-4 block">
              The Engineering Studio
            </span>
            <h2 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-[#F4F4F5] tracking-tight leading-tight">
              Direct access to senior practitioners. Zero junior delegation.
            </h2>
          </div>
          <button 
            onClick={() => navigate('/team')}
            className="inline-flex items-center gap-2 text-sm font-headline font-bold text-[#F4F4F5] hover:text-[#E8B923] transition-colors uppercase tracking-wider cursor-pointer"
          >
            View Full 10-Person Roster <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            className="lg:col-span-5 bg-[#121214] border border-[rgba(146,157,167,0.14)] rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col sm:flex-row lg:flex-col gap-6 lg:gap-8 transition-all duration-300 hover:border-[#E8B923]/40 hover:shadow-[0_0_35px_rgba(232,185,35,0.12)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full sm:w-44 lg:w-full aspect-[4/5] max-h-72 lg:max-h-80 shrink-0 rounded-2xl overflow-hidden border border-[rgba(146,157,167,0.18)] shadow-md relative bg-[#08080A]">
              <img 
                src={founder.showcaseImage || '/Images/Founder_Office.jpg'} 
                alt={`${founder.name}, ${founder.role} at Axorks Technologies`} 
                className="w-full h-full object-cover object-[center_18%]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A]/80 via-transparent to-transparent pointer-events-none" />
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold text-[#F4F4F5] mb-1">
                {founder.name}
              </h3>
              <p className="text-xs font-mono-code text-[#5EEAD4] font-bold mb-4">
                {founder.role}
              </p>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                Leading systems architecture and technical delivery at Axorks. Every client partners directly with Mujahid to lock scope, supervise live staging verification, and guarantee production-grade deployments.
              </p>
              <a href="https://linkedin.com/in/muhammad-mujahid-15949a202" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-headline font-bold text-[#5EEAD4] hover:text-[#E8B923] transition-colors uppercase tracking-wider">
                <Linkedin className="w-4 h-4" /> Connect with Founder
              </a>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featured.map((member, idx) => (
              <motion.div
                key={member.id}
                className="bg-[#121214] border border-[rgba(146,157,167,0.14)] rounded-2xl p-6 shadow-xl hover:border-[rgba(146,157,167,0.3)] transition-all flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-[#08080A] border border-[rgba(146,157,167,0.18)] shadow-sm">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className={`w-full h-full object-cover ${member.id === 'yousaf-piryani' ? 'object-[26%_40%]' : 'object-center'}`} 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xl font-headline font-bold text-[#71717A]">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-headline text-base font-bold text-[#F4F4F5] mb-1">
                    {member.name}
                  </h4>
                  <p className="text-[10px] font-mono-code text-[#E8B923] font-bold uppercase tracking-wider mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-[#A1A1AA] leading-snug line-clamp-3">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
            
            <motion.div
              className="bg-[#161618] border border-[rgba(146,157,167,0.18)] rounded-2xl p-6 spatial-card flex flex-col justify-center items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <h4 className="font-headline text-base font-bold text-[#F4F4F5] mb-2">
                Need a dedicated pod?
              </h4>
              <p className="text-xs text-[#A1A1AA] font-medium mb-4">
                Scale your engineering throughput with dedicated senior developer allocations.
              </p>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=Dedicated%20Engineering%20Pod%20Inquiry%20-%20Axorks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono-code font-bold text-[#E8B923] hover:text-[#F4F4F5] transition-colors underline decoration-[#E8B923] underline-offset-4"
              >
                Discuss Pod Allocation
              </a>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
