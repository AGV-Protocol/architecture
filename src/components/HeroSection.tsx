'use client';

import { ScrollAnimation } from '@/components/ScrollAnimation';
import { PrimaryButton } from '@/components/ui/PrimaryButton';

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center bg-black">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Main Hero Content - Center Aligned */}
        <ScrollAnimation direction="bottom" delay={0}>
          <div className="text-center mb-12 max-w-5xl mx-auto">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              AGV Token Architecture
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 leading-relaxed">
              Token System Built for the Future
            </p>
            
            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              A clean, secure 2-token structure: preGVT for presale & vesting, and GVT as the core ecosystem token powering governance, staking, and real-world asset integration.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <PrimaryButton href="#token-architecture" className="text-lg sm:text-xl px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white">
                View Token Architecture
              </PrimaryButton>
              <a 
                href="#" 
                className="text-lg sm:text-xl px-8 py-4 border-2 border-white text-white hover:bg-white/10 transition-colors rounded-lg"
              >
                Read Tokenomics
              </a>
            </div>
            
            {/* Small Image */}
            <div className="mb-8 flex justify-center">
              <img src="/token_architecture.png" alt="Token Architecture" className="max-w-md w-full h-auto" />
            </div>
            
            {/* White Horizontal Line */}
            <div className="w-full max-w-4xl mx-auto border-t border-white"></div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
