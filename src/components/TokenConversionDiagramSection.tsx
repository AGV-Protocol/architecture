'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Box } from '@/components/ui/Box';
import { ArrowRight } from 'lucide-react';

export function TokenConversionDiagramSection() {
  return (
    <SectionWrapper
      id="token-architecture"
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
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 px-4">
          AGV Token Conversion Architecture Diagram
        </h2>
      </div>

      <div className="max-w-5xl mx-auto mb-8 sm:mb-12 px-4">
        <Box className="hidden sm:block">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Box className="flex-1 max-w-md w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">PreGVT</h3>
              <div className="bg-blue-500/30 rounded-lg px-2 sm:px-3 py-1 mb-3 sm:mb-4 inline-block border border-blue-400">
                <span className="text-white text-xs sm:text-sm font-medium">Presale Token</span>
              </div>
              <div className="mb-3 sm:mb-4">
                <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Properties</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="text-white/90 text-xs sm:text-sm flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0">•</span>
                    <span>Non-transferable</span>
                  </li>
                  <li className="text-white/90 text-xs sm:text-sm flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0">•</span>
                    <span>Converts to GVT at TGE</span>
                  </li>
                  <li className="text-white/90 text-xs sm:text-sm flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0">•</span>
                    <span>Vesting enforced by escrow contracts</span>
                  </li>
                  <li className="text-white/90 text-xs sm:text-sm flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0">•</span>
                    <span>Already deployed on BNB</span>
                  </li>
                </ul>
              </div>
            </Box>

                {/* Arrow */}
                <div className="flex-shrink-0 my-2 md:my-0">
                  <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white rotate-90 md:rotate-0" />
                </div>

            <Box className="flex-1 max-w-md w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">GVT</h3>
              <div className="bg-blue-500/30 rounded-lg px-2 sm:px-3 py-1 mb-3 sm:mb-4 inline-block border border-blue-400">
                <span className="text-white text-xs sm:text-sm font-medium">Main Token</span>
              </div>
              <div className="mb-3 sm:mb-4">
                <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Properties</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="text-white/90 text-xs sm:text-sm flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0">•</span>
                    <span>Fully tradable at TGE</span>
                  </li>
                  <li className="text-white/90 text-xs sm:text-sm flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0">•</span>
                    <span>Single-chain canonical supply</span>
                  </li>
                  <li className="text-white/90 text-xs sm:text-sm flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0">•</span>
                    <span>Governance + staking + RWA access</span>
                  </li>
                </ul>
              </div>
            </Box>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12">
            <Box padding="md" rounded="xl">
              <h4 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">Pause Function</h4>
              <p className="text-white/80 text-xs sm:text-sm">Emergency stop or halting</p>
            </Box>

            <Box padding="md" rounded="xl">
              <h4 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">Timelock (optional)</h4>
              <p className="text-white/80 text-xs sm:text-sm">Delay governance-critical actions for transparency</p>
            </Box>

            <Box padding="md" rounded="xl" className="sm:col-span-2 md:col-span-1">
              <h4 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">No Upgradable Proxies</h4>
              <p className="text-white/80 text-xs sm:text-sm">To reduce attack surface</p>
            </Box>
          </div>

              {/* Token Generation / Conversion Diagram */}
              <div className="max-w-4xl mx-auto px-2">
                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold text-center mb-2 sm:mb-4 uppercase tracking-wider">
                  TOKEN GENERATION / CONVERSION
                </h3>
                
            <div className="relative overflow-x-auto" style={{ minHeight: '120px', }}>
              <img src="/arrow-btm.png" alt="Token Conversion Diagram" />
              <div className='flex justify-between'>
                <p>PreGVT</p>
                <p>GVT</p>
              </div>
            </div>
              </div>
        </Box>
        <div className="sm:hidden">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Box className="flex-1 max-w-md w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">PreGVT</h3>
              <div className="bg-blue-500/30 rounded-lg px-2 sm:px-3 py-1 mb-3 sm:mb-4 inline-block border border-blue-400">
                <span className="text-white text-xs sm:text-sm font-medium">Presale Token</span>
              </div>
              <div className="mb-3 sm:mb-4">
                <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Properties</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="text-white/90 text-xs sm:text-sm flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0">•</span>
                    <span>Non-transferable</span>
                  </li>
                  <li className="text-white/90 text-xs sm:text-sm flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0">•</span>
                    <span>Converts to GVT at TGE</span>
                  </li>
                  <li className="text-white/90 text-xs sm:text-sm flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0">•</span>
                    <span>Vesting enforced by escrow contracts</span>
                  </li>
                  <li className="text-white/90 text-xs sm:text-sm flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0">•</span>
                    <span>Already deployed on BNB</span>
                  </li>
                </ul>
              </div>
            </Box>

                {/* Arrow */}
                <div className="flex-shrink-0 my-2 md:my-0">
                  <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white rotate-90 md:rotate-0" />
                </div>

            <Box className="flex-1 max-w-md w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">GVT</h3>
              <div className="bg-blue-500/30 rounded-lg px-2 sm:px-3 py-1 mb-3 sm:mb-4 inline-block border border-blue-400">
                <span className="text-white text-xs sm:text-sm font-medium">Main Token</span>
              </div>
              <div className="mb-3 sm:mb-4">
                <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Properties</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="text-white/90 text-xs sm:text-sm flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0">•</span>
                    <span>Fully tradable at TGE</span>
                  </li>
                  <li className="text-white/90 text-xs sm:text-sm flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0">•</span>
                    <span>Single-chain canonical supply</span>
                  </li>
                  <li className="text-white/90 text-xs sm:text-sm flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0">•</span>
                    <span>Governance + staking + RWA access</span>
                  </li>
                </ul>
              </div>
            </Box>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12">
            <Box padding="md" rounded="xl">
              <h4 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">Pause Function</h4>
              <p className="text-white/80 text-xs sm:text-sm">Emergency stop or halting</p>
            </Box>

            <Box padding="md" rounded="xl">
              <h4 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">Timelock (optional)</h4>
              <p className="text-white/80 text-xs sm:text-sm">Delay governance-critical actions for transparency</p>
            </Box>

            <Box padding="md" rounded="xl" className="sm:col-span-2 md:col-span-1">
              <h4 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">No Upgradable Proxies</h4>
              <p className="text-white/80 text-xs sm:text-sm">To reduce attack surface</p>
            </Box>
          </div>

              {/* Token Generation / Conversion Diagram */}
              <div className="max-w-4xl mx-auto px-2">
                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold text-center mb-2 sm:mb-4 uppercase tracking-wider">
                  TOKEN GENERATION / CONVERSION
                </h3>
                
            <div className="relative overflow-x-auto" style={{ minHeight: '120px', }}>
              <img src="/arrow-btm.png" alt="Token Conversion Diagram" />
              <div className='flex justify-between'>
                <p>PreGVT</p>
                <p>GVT</p>
              </div>
            </div>
              </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

