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
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
          One Chain. Zero Confusion.{' '}
          <span className="text-blue-400 italic">Maximum Security.</span>
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          AGV launches on BNB Chain only — no bridges, no mirrored supplies, no cross-chain risks. This ensures the simplest audits, safest user experience, and cleanest token economics.
        </p>
        
        <div className="mb-8 sm:mb-12 flex justify-center px-4">
          <img src="/agv_bnb.png" alt="BNB Chain" className="max-w-full sm:max-w-2xl w-full h-auto rounded-lg" />
        </div>
        
        <div className="flex flex-col items-center gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 sm:gap-6 w-full">
            <Box className="w-full max-w-[270px] mx-auto sm:max-w-none min-h-[180px] sm:min-h-[200px] flex flex-col justify-center" padding="md">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center p-3 sm:p-4 justify-center text-white font-bold text-base sm:text-lg mx-auto mb-3 sm:mb-4 bg-primary">
                <img src="/icons/thunder.svg" alt="Single Chain" className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h4 className="text-white font-semibold mb-2 text-center text-sm sm:text-base">Fast Execution</h4>
            </Box>

            <Box className="w-full max-w-[270px] mx-auto sm:max-w-none min-h-[180px] sm:min-h-[200px] flex flex-col justify-center" padding="md">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center p-3 sm:p-4 justify-center text-white font-bold text-base sm:text-lg mx-auto mb-3 sm:mb-4 bg-primary">
                <img src="/icons/stamp.svg" alt="No Bridges" className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="text-white font-semibold mb-2 text-center text-sm sm:text-base">Lowest Audit Complexity</h4>
            </Box>

            <Box className="w-full max-w-[270px] mx-auto sm:max-w-none min-h-[180px] sm:min-h-[200px] flex flex-col justify-center" padding="md">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center p-3 sm:p-4 justify-center text-white font-bold text-base sm:text-lg mx-auto mb-3 sm:mb-4 bg-primary">
                <img src="/icons/spring.svg" alt="Clean Listing" className="w-20 h-20 sm:w-24 sm:h-24" width={48} height={48} />
              </div>
              <h4 className="text-white font-semibold mb-2 text-center text-sm sm:text-base">Cleanest listing pathway</h4>
            </Box>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 sm:gap-6 w-full">
            <Box className="w-full max-w-[270px] mx-auto sm:max-w-none min-h-[180px] sm:min-h-[200px] flex flex-col justify-center" padding="md">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center p-3 sm:p-4 justify-center text-white font-bold text-base sm:text-lg mx-auto mb-3 sm:mb-4 bg-primary">
                <img src="/icons/checked.svg" alt="Easy On-chain Supply Verification" className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h4 className="text-white font-semibold mb-2 text-center text-sm sm:text-base">Easy on-chain supply verification</h4>
            </Box>

            <Box className="w-full max-w-[270px] mx-auto sm:max-w-none min-h-[180px] sm:min-h-[200px] flex flex-col justify-center" padding="md">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center p-3 sm:p-4 justify-center text-white font-bold text-base sm:text-lg mx-auto mb-3 sm:mb-4 bg-primary">
                <img src="/icons/brick.svg" alt="Clean Economics" className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h4 className="text-white font-semibold mb-2 text-center text-sm sm:text-base">Minimal, predictable architecture</h4>
            </Box>
          </div>
        </div>
        
        <div className="w-full max-w-4xl mx-auto border-t border-white"></div>
      </div>
    </SectionWrapper>
  );
}

