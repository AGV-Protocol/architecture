'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';

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

      {/* Desktop View */}
      <div className="hidden md:block max-w-6xl mx-auto mb-12 px-4">
        <div className="relative flex items-stretch">
          {/* Phase 1 - Blue arrow box */}
          <div className="flex-1 relative">
            <div 
              className="relative h-32 flex items-center px-6"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(59, 130, 246, 0.7))',
                clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 50%, calc(100% - 30px) 100%, 0 100%)',
                border: '2px solid rgb(59, 130, 246)',
              }}
            >
              <div className="text-white">
                <h3 className="font-bold text-xl mb-1">Phase 1 — Pre-TGE</h3>
                <p className="text-white/90">PreGVT–USDT LP on PancakeSwap.</p>
              </div>
            </div>
            
            {/* Purpose section below */}
            <div className="mt-8 pl-6">
              <h4 className="text-white font-bold text-lg mb-3">Purpose</h4>
              <ul className="space-y-2">
                <li className="text-white/90 flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Price reference</span>
                </li>
                <li className="text-white/90 flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Wallet + dashboard visibility</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle gradient arrow */}
          <div 
            className="w-20 h-32 relative -mx-2 z-10"
            style={{
              background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.7), rgba(79, 172, 254, 0.5), rgba(234, 179, 8, 0.5), rgba(234, 179, 8, 0.7))',
              clipPath: 'polygon(0 0, 70% 0, 100% 50%, 70% 100%, 0 100%, 30% 50%)',
            }}
          />

          {/* Phase 2 - Yellow arrow box */}
          <div className="flex-1 relative">
            <div 
              className="relative h-32 flex items-center px-6 rounded-r-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.7), rgba(234, 179, 8, 0.9))',
                border: '2px solid rgb(234, 179, 8)',
                clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%, 5% 50%)",
              }}
            >
              <div className="text-white pl-6">
                <h3 className="font-bold text-xl mb-1">Phase 2 — TGE</h3>
                <p className="text-white/90">GVT liquidity goes live.</p>
              </div>
            </div>
            
            {/* Includes section below */}
            <div className="mt-8 pl-12">
              <h4 className="text-white font-bold text-lg mb-3">Includes</h4>
              <ul className="space-y-2">
                <li className="text-white/90 flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Market-maker support</span>
                </li>
                <li className="text-white/90 flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Full conversion from preGVT → GVT</span>
                </li>
                <li className="text-white/90 flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>On-chain circulating supply disclosure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden max-w-md mx-auto mb-12 px-4">
        <div className="relative">
          {/* Phase 1 - Blue chevron */}
          <div 
            className="relative py-8 px-6 rounded-t-2xl"
            style={{
              height: "15pc",
              background: "linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(59, 130, 246, 0.7))",
              clipPath: "polygon(0px 0px, 100% 0px, 100% calc(100% - 10px), 51% 85%, 0px calc(100% - 12px))",
            }}
          >
            <div className="text-center text-white mb-4">
              <h3 className="font-bold text-xl mb-2">Phase 1 — Pre-TGE</h3>
              <p className="text-white/90 mb-4">PreGVT–USDT LP on PancakeSwap.</p>
              <ul className="space-y-2 text-left max-w-xs mx-auto">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Price reference</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wallet + dashboard visibility</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle gradient transition */}
          <div 
            className="h-16 w-full relative -my-2 z-10"
            style={{
              background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.7), rgba(79, 172, 254, 0.5), rgba(234, 179, 8, 0.5), rgba(234, 179, 8, 0.7))',
              clipPath: 'polygon(50% 0, 100% 30%, 100% 100%, 50% 70%, 0 100%, 0 30%)',
            }}
          />

          {/* Phase 2 - Yellow chevron */}
          <div 
            className="relative py-8 px-6 rounded-b-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.7), rgba(234, 179, 8, 0.9))',
              clipPath: 'polygon(0 30px, 50% 0, 100% 30px, 100% 100%, 0 100%)',
            }}
          >
            <div className="text-center text-white pt-4">
              <h3 className="font-bold text-xl mb-2">Phase 2 — TGE</h3>
              <p className="text-white/90 mb-4">GVT liquidity goes live.</p>
              <ul className="space-y-2 text-left max-w-xs mx-auto">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Market-maker support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Full conversion from preGVT → GVT</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>On-chain circulating supply disclosure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto border-t border-white"></div>
    </SectionWrapper>
  );
}