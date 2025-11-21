'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Box } from '@/components/ui/Box';
import { ArrowRight } from 'lucide-react';

export function TokenConversionDiagramSection() {
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
          AGV Token Conversion Architecture Diagram
        </h2>
      </div>

      <div className="max-w-5xl mx-auto mb-12">
        <Box>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <Box className="flex-1 max-w-md">
              <h3 className="text-2xl font-bold text-white mb-4">PreGVT</h3>
              <div className="bg-blue-500/30 rounded-lg px-3 py-1 mb-4 inline-block border border-blue-400">
                <span className="text-white text-sm font-medium">Presale Token</span>
              </div>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-3">Properties</h4>
                <ul className="space-y-2">
                  <li className="text-white/90 text-sm flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Non-transferable</span>
                  </li>
                  <li className="text-white/90 text-sm flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Converts to GVT at TGE</span>
                  </li>
                  <li className="text-white/90 text-sm flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Vesting enforced by escrow contracts</span>
                  </li>
                  <li className="text-white/90 text-sm flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Already deployed on BNB</span>
                  </li>
                </ul>
              </div>
            </Box>

                {/* Arrow */}
                <div className="flex-shrink-0">
                  <ArrowRight className="w-12 h-12 text-white rotate-90 md:rotate-0" />
                </div>

            <Box className="flex-1 max-w-md">
              <h3 className="text-2xl font-bold text-white mb-4">GVT</h3>
              <div className="bg-blue-500/30 rounded-lg px-3 py-1 mb-4 inline-block border border-blue-400">
                <span className="text-white text-sm font-medium">Main Token</span>
              </div>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-3">Properties</h4>
                <ul className="space-y-2">
                  <li className="text-white/90 text-sm flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Fully tradable at TGE</span>
                  </li>
                  <li className="text-white/90 text-sm flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Single-chain canonical supply</span>
                  </li>
                  <li className="text-white/90 text-sm flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Governance + staking + RWA access</span>
                  </li>
                </ul>
              </div>
            </Box>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Box padding="md" rounded="xl">
              <h4 className="text-white font-bold text-lg mb-2">Pause Function</h4>
              <p className="text-white/80 text-sm">Emergency stop or halting</p>
            </Box>

            <Box padding="md" rounded="xl">
              <h4 className="text-white font-bold text-lg mb-2">Timelock (optional)</h4>
              <p className="text-white/80 text-sm">Delay governance-critical actions for transparency</p>
            </Box>

            <Box padding="md" rounded="xl">
              <h4 className="text-white font-bold text-lg mb-2">No Upgradable Proxies</h4>
              <p className="text-white/80 text-sm">To reduce attack surface</p>
            </Box>
          </div>

              {/* Token Generation / Conversion Diagram */}
              <div className="max-w-4xl mx-auto">
                <h3 className="text-white text-xl font-bold text-center mb-2 uppercase tracking-wider">
                  TOKEN GENERATION / CONVERSION
                </h3>
                
                <div className="relative" style={{ minHeight: '150px', }}>
                  {/* Horizontal line with arrowheads - positioned at center */}
                  <div className="absolute left-0 right-0" style={{ top: '50%', transform: 'translateY(-50%)' }}>
                    <div className="relative w-full h-1.5 bg-white">
                      {/* 4 arrowheads along the line - evenly spaced */}
                      <div className="absolute left-[20%] top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent"></div>
                      </div>
                      <div className="absolute left-[40%] top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent"></div>
                      </div>
                      <div className="absolute left-[60%] top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent"></div>
                      </div>
                      <div className="absolute left-[80%] top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent"></div>
                      </div>
                    </div>
                  </div>

                  {/* PreGVT label with vertical line and upward arrow */}
                  <div className="absolute left-0 bottom-0 flex flex-col items-center">
                    {/* Vertical line with upward arrow - connects to horizontal line */}
                    <div 
                      className="absolute left-1/2 transform -translate-x-1/2 w-1.5 bg-white"
                      style={{ 
                        bottom: '40px',
                        height: 'calc(50% - 40px)'
                      }}
                    >
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                        <div className="w-0 h-0 border-b-[10px] border-b-white border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent"></div>
                      </div>
                    </div>
                    {/* PreGVT label */}
                    <p className="text-white font-bold text-lg uppercase">PreGVT</p>
                  </div>

                  {/* GVT label with vertical line and downward arrow */}
                  <div className="absolute right-0 bottom-0 flex flex-col items-center">
                    {/* Vertical line with downward arrow - connects from horizontal line */}
                    <div 
                      className="absolute left-1/2 transform -translate-x-1/2 w-1.5 bg-white"
                      style={{ 
                        bottom: '40px',
                        height: 'calc(50% - 40px)'
                      }}
                    >
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                        <div className="w-0 h-0 border-t-[10px] border-t-white border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent"></div>
                      </div>
                    </div>
                    {/* GVT label */}
                    <p className="text-white font-bold text-lg uppercase">GVT</p>
                  </div>
                </div>
              </div>
        </Box>
      </div>
    </SectionWrapper>
  );
}

