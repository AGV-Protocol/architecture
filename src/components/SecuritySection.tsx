'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';

export function SecuritySection() {
  return (
    <SectionWrapper
      glowEffect={{
        top: '50%',
        left: '50%',
        width: '800px',
        height: '800px',
        blur: '100px',
        transform: 'translate(-50%, -50%)'
      }}
      scrollAnimation={{ direction: 'bottom', delay: 0 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
          Security at the{' '}
          <span className="text-blue-400 italic">Core of the System</span>
        </h2>
      </div>

          {/* Image with connecting lines */}
          <div className="relative max-w-5xl mx-auto mb-12" style={{ minHeight: '500px' }}>
            {/* Central Image (inverted pentagon shape - placeholder) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px]">
                <img src="/shield.png" alt="Security Core" className="w-full h-full" />
              </div>
            </div>

            {/* Text positions around the image with connecting lines */}
            {/* Top Left - text1 */}
            <div className="absolute top-30 left-0 max-w-[220px]">
              <div className="relative">
                <p className="text-white text-base font-bold text-right mb-2">Safe Multisig controls all minting</p>
              </div>
            </div>

            {/* Top Right - text2 */}
            <div className="absolute top-30 right-0 max-w-[220px]">
              <div className="relative">
                <p className="text-white text-base font-bold text-left mb-2">
                  One chain = smaller attack surface</p>
              </div>
            </div>

            {/* Bottom Left - text3 */}
            <div className="absolute bottom-49 left-0 max-w-[220px]">
              <div className="relative">
                <p className="text-white text-base font-bold text-right mt-2">
                  Escrow-based vesting enforcement
                </p>
              </div>
            </div>

            {/* Bottom Right - text4 */}
            <div className="absolute bottom-46 right-0 max-w-[220px]">
              <div className="relative">
                <p className="text-white text-base font-bold text-left mt-2">Non-upgradable contracts for stability</p>
              </div>
            </div>

            {/* Bottom Center Left - text5 */}
            <div className="absolute bottom-[-39] left-1/3 max-w-[200px] transform -translate-x-1/2">
              <div className="relative">
                <p className="text-white text-base font-bold text-right mt-2">Pausable emergency functions</p>
              </div>
            </div>

            {/* Bottom Center Right - text6 */}
            <div className="absolute bottom-[-39] right-1/3 max-w-[200px] transform translate-x-1/2">
              <div className="relative">
                <p className="text-white text-base font-bold text-left mt-2">Optional timelock governance</p>
              </div>
            </div>
          </div>
          
      <div className="w-full max-w-4xl mx-auto border-t border-white"></div>
    </SectionWrapper>
  );
}

