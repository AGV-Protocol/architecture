'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Box } from '@/components/ui/Box';

export function OneChainSection() {
  return (
    <SectionWrapper
      glowEffect={{
        bottom: '77%',
        left: '7%',
        width: '700px',
        height: '700px',
        blur: '100px'
      }}
      scrollAnimation={{ direction: 'bottom', delay: 0 }}
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          One Chain. Zero Confusion.{' '}
          <span className="text-blue-400 italic">Maximum Security.</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          AGV launches on BNB Chain only — no bridges, no mirrored supplies, no cross-chain risks. This ensures the simplest audits, safest user experience, and cleanest token economics.
        </p>
        
        <div className="mb-12 flex justify-center">
          <img src="/agv_bnb.png" alt="BNB Chain" className="max-w-2xl w-full h-auto rounded-lg" />
        </div>
        
        <div className="flex flex-col items-center gap-6 mb-12 max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center gap-6 w-full">
            <Box className="w-full max-w-[270px] min-h-[200px] flex flex-col justify-center" padding="md">
              <div className="w-12 h-12 rounded-full flex items-center p-4 justify-center text-white font-bold text-lg mx-auto mb-4 bg-primary">
                <img src="/icons/thunder.svg" alt="Single Chain" className="w-12 h-12" />
              </div>
              <h4 className="text-white font-semibold mb-2 text-center">Fast Execution</h4>
            </Box>

            <Box className="w-full max-w-[270px] min-h-[200px] flex flex-col justify-center" padding="md">
              <div className="w-12 h-12 rounded-full flex items-center p-4 justify-center text-white font-bold text-lg mx-auto mb-4 bg-primary">
                <img src="/icons/stamp.svg" alt="No Bridges" className="w-6 h-6" />
              </div>
              <h4 className="text-white font-semibold mb-2 text-center">Lowest Audit Complexity</h4>
            </Box>

            <Box className="w-full max-w-[270px] min-h-[200px] flex flex-col justify-center" padding="md">
              <div className="w-12 h-12 rounded-full flex items-center p-4 justify-center text-white font-bold text-lg mx-auto mb-4 bg-primary">
                <img src="/icons/spring.svg" alt="Clean Listing" className="w-24 h-24" width={48} height={48} />
              </div>
              <h4 className="text-white font-semibold mb-2 text-center">Cleanest listing pathway</h4>
            </Box>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 w-full">
            <Box className="w-full max-w-[270px] min-h-[200px] flex flex-col justify-center" padding="md">
              <div className="w-12 h-12 rounded-full flex items-center p-4 justify-center text-white font-bold text-lg mx-auto mb-4 bg-primary">
                <img src="/icons/checked.svg" alt="Easy On-chain Supply Verification" className="w-12 h-12" />
              </div>
              <h4 className="text-white font-semibold mb-2 text-center">Easy on-chain supply verification</h4>
            </Box>

            <Box className="w-full max-w-[270px] min-h-[200px] flex flex-col justify-center" padding="md">
              <div className="w-12 h-12 rounded-full flex items-center p-4 justify-center text-white font-bold text-lg mx-auto mb-4 bg-primary">
                <img src="/icons/brick.svg" alt="Clean Economics" className="w-12 h-12" />
              </div>
              <h4 className="text-white font-semibold mb-2 text-center">Minimal, predictable architecture</h4>
            </Box>
          </div>
        </div>
        
        <div className="w-full max-w-4xl mx-auto border-t border-white"></div>
      </div>
    </SectionWrapper>
  );
}

