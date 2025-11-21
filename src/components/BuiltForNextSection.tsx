'use client';

import { ScrollAnimation } from '@/components/ScrollAnimation';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Box } from '@/components/ui/Box';
import { Clock, Shield, Eye, TrendingUp, Building, FileText, Network } from 'lucide-react';

export function BuiltForNextSection() {
  const items = [
    {
      icon: Clock,
      text: 'Faster audits'
    },
    {
      icon: Shield,
      text: 'Lower security risk'
    },
    {
      icon: Eye,
      text: 'Transparent supply'
    },
    {
      icon: TrendingUp,
      text: 'Predictable token behaviour'
    },
    {
      icon: Building,
      text: 'Exchange-friendly'
    },
    {
      icon: FileText,
      text: 'Clean documentation'
    },
    {
      icon: Network,
      text: 'Foundation for multichain expansion later'
    }
  ];

  return (
    <SectionWrapper
      glowEffect={{
        top: '25%',
        right: '12%',
        width: '650px',
        height: '650px',
        blur: '90px',
        transform: 'translate(50%, -50%)'
      }}
      scrollAnimation={{ direction: 'bottom', delay: 0 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          AGV Token Architecture — Built for{' '}
          <span className="text-blue-400 italic">What Comes Next</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Your preGVT automatically transitions to GVT through a secure vesting contract at TGE.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mb-12">
        <Box>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
            {items.slice(0, 4).map((item, index) => {
              const IconComponent = item.icon;
              return (
                <ScrollAnimation key={index} direction="bottom" delay={index * 100}>
                  <Box className="flex flex-col items-center justify-center text-center w-48 h-48" padding="md" rounded="xl">
                    {/* Icon in circular blue bg */}
                    <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-3">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {/* Text */}
                    <p className="text-white text-base font-medium">{item.text}</p>
                  </Box>
                </ScrollAnimation>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {items.slice(4, 7).map((item, index) => {
              const IconComponent = item.icon;
              return (
                <ScrollAnimation key={index + 4} direction="bottom" delay={(index + 4) * 100}>
                  <Box className="flex flex-col items-center justify-center text-center w-48 h-48" padding="md" rounded="xl">
                    {/* Icon in circular blue bg */}
                    <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-3">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {/* Text */}
                    <p className="text-white text-base font-medium">{item.text}</p>
                  </Box>
                </ScrollAnimation>
              );
            })}
          </div>
        </Box>
      </div>
          
      <div className="w-full max-w-4xl mx-auto border-t border-white"></div>
    </SectionWrapper>
  );
}

