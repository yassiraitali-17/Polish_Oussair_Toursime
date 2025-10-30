import { useEffect, useState } from 'react';
import logoIcon from '@/assets/logo-icon.png';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [stage, setStage] = useState<'icon' | 'wordmark' | 'complete'>('icon');

  useEffect(() => {
    // Icon build and settle: 0-600ms
    const wordmarkTimer = setTimeout(() => setStage('wordmark'), 600);

    // Complete animation and exit: at 1500ms
    const completeTimer = setTimeout(() => {
      setStage('complete');
      setTimeout(onLoadingComplete, 300);
    }, 1500);

    return () => {
      clearTimeout(wordmarkTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ${
        stage === 'complete' ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background: 'radial-gradient(circle at 50% 45%, hsl(45 100% 96%), hsl(0 0% 100%) 60%)',
        transition: 'opacity 700ms cubic-bezier(0.4, 0.0, 0.2, 1)'
      }}
    >
      {/* Golden ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 45%, hsl(28 76% 56% / 0.08) 0%, transparent 50%)',
          animation: 'golden-breathe 1500ms ease-in-out infinite'
        }}
      />

      <div
        className={`relative flex flex-col items-center transition-all duration-400 ${
          stage === 'complete' ? '-translate-y-24 scale-90' : 'translate-y-0 scale-100'
        }`}
      >
        {/* Logo with rotating animation */}
        <div className="relative w-32 h-32 mb-8 animate-spin">
          <img
            src={logoIcon}
            alt="OUSSAID Icon"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Wordmark - OUSSAID with elegant tracking */}
        {stage !== 'icon' && (
          <div
            className="text-6xl font-bold relative"
            style={{
              color: 'hsl(28 76% 56%)',
              animation: 'wordmark-elegant-rise 350ms cubic-bezier(0.34, 1.56, 0.64, 1) 0ms forwards',
              fontFamily: 'Poppins, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              textShadow: '0 2px 12px hsl(28 76% 56% / 0.15)'
            }}
          >
            OUSSAID
          </div>
        )}

        {/* Subtitle - TOURISME */}
        {stage !== 'icon' && (
          <div
            className="text-base font-semibold tracking-[0.25em] mt-2"
            style={{
              color: 'hsl(182 54% 42%)',
              animation: 'subtitle-elegant-fade 250ms cubic-bezier(0.4, 0.0, 0.2, 1) 100ms forwards',
              fontFamily: 'Poppins, sans-serif',
              textTransform: 'uppercase',
              opacity: 0
            }}
          >
            TOURISME
          </div>
        )}

        {/* Final lockup elevation */}
        {stage === 'complete' && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              animation: 'lockup-elevate 400ms cubic-bezier(0.4, 0.0, 0.2, 1) 0ms forwards'
            }}
          />
        )}
      </div>

      {/* Reduced motion fallback */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
