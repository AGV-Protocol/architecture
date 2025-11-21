'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Box } from '@/components/ui/Box';

export function LiquidityStrategySection() {
  return (
    <SectionWrapper
      glowEffect={{
        top: '20%',
        left: '10%',
        width: '600px',
        height: '600px',
        blur: '100px'
      }}
      scrollAnimation={{ direction: 'bottom', delay: 0 }}
    >
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 px-4">
          A Phased Liquidity Strategy for{' '}
          <span className="text-blue-400">Clean Price Discovery</span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto mb-8 sm:mb-12 px-4">
        <Box padding="md">
          {/* Three Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-4 items-start">
            {/* Column 1: Phase 1 + Purpose */}
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Phase 1 - Blue box with triangular right edge */}
              <div 
                className="bg-blue-500/20 backdrop-blur-sm border-2 border-blue-500 p-3 sm:p-4 relative w-full md:w-auto rounded-lg md:rounded-none"
                style={{
                  clipPath: 'polygon(0% 0%, 75% 0%, 80% 50%, 75% 100%, 0% 100%)',
                }}
              >
                <h3 className="text-white font-bold text-base sm:text-lg">Phase 1 — Pre-TGE</h3>
                <p className="text-white/90 text-sm sm:text-base">PreGVT–USDT LP on PancakeSwap.</p>
              </div>
              
              {/* Purpose section */}
              <div>
                <h4 className="text-white font-semibold mb-2 sm:mb-3 text-left text-sm sm:text-base">Purpose</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="text-white/90 text-sm sm:text-base flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0">•</span>
                    <span>Price reference</span>
                  </li>
                  <li className="text-white/90 text-sm sm:text-base flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0">•</span>
                    <span>Wallet + dashboard visibility</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2: Middle Design */}
            <div className="flex items-center justify-center my-4 md:my-0">
              <div 
                className="bg-blue-500/20 backdrop-blur-sm p-3 sm:p-4 relative w-full md:w-auto rounded-lg md:rounded-none h-[60px] md:h-[5.5pc]"
                style={{
                  clipPath: 'polygon(86% -18%, 100% 52%, 93% 100%, 1% 100%, 6% 48%, 0% 0%)',
                  background: 'linear-gradient(to right, rgba(59, 130, 246, 1), rgba(234, 179, 8, 1))',
                }}
              >
              </div>
            </div>

            {/* Column 3: Phase 2 + Includes */}
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Phase 2 - Yellow box */}
              <div 
                className="bg-yellow-500/20 backdrop-blur-sm border-2 border-yellow-500 p-3 sm:p-4 md:pl-8 relative w-full md:w-auto rounded-lg md:rounded-none md:rounded-r-lg"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 1% 100%, 8% 48%)',
                }}
              >
                <h3 className="text-white font-bold text-base sm:text-lg">Phase 2 — TGE</h3>
                <p className="text-white/90 text-sm sm:text-base">GVT liquidity goes live.</p>
              </div>
              
              {/* Includes section */}
              <div>
                <h4 className="text-white font-semibold mb-2 sm:mb-3 text-left text-sm sm:text-base">Includes</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="text-white/90 text-sm sm:text-base flex items-start">
                    <span className="text-yellow-400 mr-2 shrink-0">•</span>
                    <span>Market-maker support</span>
                  </li>
                  <li className="text-white/90 text-sm sm:text-base flex items-start">
                    <span className="text-yellow-400 mr-2 shrink-0">•</span>
                    <span>Full conversion from preGVT → GVT</span>
                  </li>
                  <li className="text-white/90 text-sm sm:text-base flex items-start">
                    <span className="text-yellow-400 mr-2 shrink-0">•</span>
                    <span>On-chain circulating supply disclosure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Box>
      </div>
      
      <div className="w-full max-w-4xl mx-auto border-t border-white"></div>
    </SectionWrapper>
  );
}

