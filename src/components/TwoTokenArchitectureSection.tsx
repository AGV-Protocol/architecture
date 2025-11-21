'use client';

import { ScrollAnimation } from '@/components/ScrollAnimation';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Box } from '@/components/ui/Box';
import { AlertTriangle } from 'lucide-react';

export function TwoTokenArchitectureSection() {
  return (
    <SectionWrapper
      glowEffect={{
        top: '30%',
        right: '15%',
        width: '650px',
        height: '650px',
        blur: '90px'
      }}
      scrollAnimation={{ direction: 'bottom', delay: 0 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
          A Purpose-Built,{' '}
          <span className="text-blue-400 italic">Two-Token Architecture</span>
        </h2>
      </div>

      <ScrollAnimation direction="left" delay={200}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
          <Box className="relative flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-blue-400">PreGVT</span>: Presale + early reward token
            </h3>
            <ul className="space-y-3 mb-6 grow">
              <li className="text-white/90 flex items-start text-xl mb-6">
                <span className="text-blue-400 mr-2">•</span>
                <span>Non-transferable</span>
              </li>
              <li className="text-white/90 flex items-start text-xl mb-6">
                <span className="text-blue-400 mr-2">•</span>
                <span>Converts to GVT at TGE</span>
              </li>
              <li className="text-white/90 flex items-start text-xl mb-6">
                <span className="text-blue-400 mr-2">•</span>
                <span>Vesting enforced by escrow contracts</span>
              </li>
              <li className="text-white/90 flex items-start text-xl mb-6">
                <span className="text-blue-400 mr-2">•</span>
                <span>Already deployed on BNB</span>
              </li>
            </ul>
            
            <div className="bg-yellow-500/20 backdrop-blur-sm rounded-lg p-4 border-2 border-yellow-500 flex items-center gap-3 w-fit">
              <AlertTriangle className="w-6 h-6 text-yellow-400 shrink-0" />
              <span className="text-white font-semibold">Locked until TGE</span>
            </div>
          </Box>
          
          <div className="flex justify-center lg:justify-end items-stretch">
            <img src="/pregvt.png" alt="PreGVT" className="max-w-md w-full h-full object-contain rounded-lg" />
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation direction="right" delay={400}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1 items-stretch">
            <img src="/gvt.png" alt="GVT" className="max-w-md w-full h-full object-contain rounded-lg" />
          </div>
          
          <Box className="relative order-1 lg:order-2 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-blue-400">GVT</span>: Main tradable ecosystem token
            </h3>
            <ul className="space-y-3 mb-6 grow">
              <li className="text-white/90 flex items-start text-xl mb-6">
                <span className="text-blue-400 mr-2">•</span>
                <span>Fully tradable at TGE</span>
              </li>
              <li className="text-white/90 flex items-start text-xl mb-6">
                <span className="text-blue-400 mr-2">•</span>
                <span>Single-chain canonical supply</span>
              </li>
              <li className="text-white/90 flex items-start text-xl mb-6">
                <span className="text-blue-400 mr-2">•</span>
                <span>Governance + staking + RWA access</span>
              </li>
            </ul>
            
            <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-4 border-2 border-green-500 flex items-center gap-3 w-fit">
              <AlertTriangle className="w-6 h-6 text-green-400 shrink-0" />
              <span className="text-white font-semibold">The core AGV asset.</span>
            </div>
          </Box>
        </div>
      </ScrollAnimation>
          
      <div className="w-full max-w-4xl mx-auto border-t border-white"></div>
    </SectionWrapper>
  );
}

