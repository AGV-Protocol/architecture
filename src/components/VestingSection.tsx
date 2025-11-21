'use client';

import { ScrollAnimation } from '@/components/ScrollAnimation';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Box } from '@/components/ui/Box';
import { Coins, Lock, Calendar, LockOpen, Wallet, ArrowRight } from 'lucide-react';

export function VestingSection() {
  const steps = [
    {
      icon: Coins,
      text: 'You hold preGVT'
    },
    {
      icon: Lock,
      text: 'preGVT moves into vesting contract'
    },
    {
      icon: Calendar,
      text: 'Vesting duration: 9–12 months'
    },
    {
      icon: LockOpen,
      text: 'GVT unlocks gradually'
    },
    {
      icon: Wallet,
      text: 'You receive liquid GVT'
    }
  ];

  return (
    <SectionWrapper
      glowEffect={{
        bottom: '15%',
        right: '10%',
        width: '700px',
        height: '700px',
        blur: '100px',
        transform: 'translate(50%, 50%)'
      }}
      scrollAnimation={{ direction: 'bottom', delay: 0 }}
    >
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
          From PreGVT to GVT —{' '}
          <span className="text-blue-400 italic">Fully Transparent Vesting</span>
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
          Your preGVT automatically transitions to GVT through a secure vesting contract at TGE.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mb-8 sm:mb-12 px-4">
        <Box padding="md">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-2 md:gap-4">
                {steps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="flex flex-col sm:flex-row items-center">
                      <ScrollAnimation direction="bottom" delay={index * 100}>
                        <div className="flex flex-col items-center text-center">
                          {/* Icon in circular border */}
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[3px] sm:border-4 border-primary flex items-center justify-center mb-3 sm:mb-4 bg-white/10 backdrop-blur-sm">
                            <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                          </div>
                          {/* Text */}
                          <p className="text-white text-xs sm:text-sm font-bold max-w-[120px] sm:max-w-none">{step.text}</p>
                        </div>
                      </ScrollAnimation>
                      {/* Arrow between groups (not after last one) */}
                      {index < steps.length - 1 && (
                        <div className="hidden sm:flex items-center justify-center mx-2 sm:mx-3 md:mx-4">
                          <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-white/60" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
        </Box>
      </div>
      
      <div className="w-full max-w-4xl mx-auto border-t border-white"></div>
    </SectionWrapper>
  );
}

