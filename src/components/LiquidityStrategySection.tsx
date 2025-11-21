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
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
          A Phased Liquidity Strategy for{' '}
          <span className="text-blue-400">Clean Price Discovery</span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto mb-12">
        <Box padding="md">
              {/* Top Row: Phase boxes with arrows */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
                {/* Phase 1 - Blue box with triangular right edge (slant pentagon) */}
                <div className="flex-1 max-w-md">
                  <div 
                    className="bg-blue-500/20 backdrop-blur-sm border-2 border-blue-500 p-4 relative"
                    style={{
                      clipPath: 'polygon(0% 0%, 75% 0%, 80% 50%, 75% 100%, 0% 100%);'
                    }}
                  >
                    <h3 className="text-white font-bold text-lg">Phase 1 — Pre-TGE</h3>
                    <p className="text-white/90 text-base">PreGVT–USDT LP on PancakeSwap.</p>
                  </div>
                </div>

                <div className="flex-1 max-w-md">
                  <div 
                    className="bg-blue-500/20 backdrop-blur-sm p-4 relative"
                    style={{
                      height: '5.5pc',
                      clipPath: 'polygon(75% 0%, 89% 53%, 75% 100%, 0% 100%, 11% 53%, 0% 0%);',
                      background: 'linear-gradient(to right, rgba(59, 130, 246, 1), rgba(234, 179, 8, 1))',
                    }}
                  >
                  </div>
                </div>

                {/* Phase 2 - Yellow box */}
                <div className="flex-1 max-w-md">
                  <div 
                    className="bg-yellow-500/20 backdrop-blur-sm border-2 border-yellow-500 pl-8 p-4 relative"
                    style={{
                      clipPath: 'polygon(75% 0%, 76% 57%, 75% 100%, 0% 100%, 5% 50%, 0% 0%);',
                      borderRadius: '0 0.5rem 0.5rem 0'
                    }}
                  >
                    <h3 className="text-white font-bold text-lg">Phase 2 — TGE</h3>
                    <p className="text-white/90 text-base">GVT liquidity goes live.</p>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Purpose and Includes sections */}
              <div className="flex flex-col md:flex-row gap-6 ">
                {/* Purpose section - aligned left, below Phase 1 */}
                <div className="flex-1 max-w-md">
                  <h4 className="text-white font-semibold mb-3 text-left">Purpose</h4>
                  <ul className="space-y-2">
                    <li className="text-white/90 text-base flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Price reference</span>
                    </li>
                    <li className="text-white/90 text-base flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Wallet + dashboard visibility</span>
                    </li>
                  </ul>
                </div>

                {/* Spacer for middle */}
                <div className="w-8 md:w-12"></div>

                {/* Includes section - aligned right, below Phase 2 */}
                <div className="flex-1 max-w-md md:text-right">
                  <h4 className="text-white font-semibold mb-3 text-left">Includes</h4>
                  <ul className="space-y-2 md:text-right">
                    <li className="text-white/90 text-base flex">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Market-maker support</span>
                    </li>
                    <li className="text-white/90 text-base flex">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Full conversion from preGVT → GVT</span>
                    </li>
                    <li className="text-white/90 text-base flex">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>On-chain circulating supply disclosure</span>
                    </li>
                  </ul>
                </div>
              </div>
        </Box>
      </div>
      
      <div className="w-full max-w-4xl mx-auto border-t border-white"></div>
    </SectionWrapper>
  );
}

