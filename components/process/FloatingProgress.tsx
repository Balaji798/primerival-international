'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

interface FloatingProgressProps {
  totalStages: number;
  stageRefs?: React.RefObject<HTMLDivElement>[];
}

export default function FloatingProgress({ totalStages, stageRefs }: FloatingProgressProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentStageNum, setCurrentStageNum] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Move all useTransform hooks to the top level
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const currentStage = useTransform(scrollYProgress, [0, 1], [1, totalStages]);

  useEffect(() => {
    const unsubscribeScroll = scrollYProgress.on('change', (latest) => {
      // Show when user scrolls into the section (after 5%)
      // Hide when user scrolls past the section (after 95%)
      setIsVisible(latest > 0.05 && latest < 0.95);
      
      // Update progress percentage
      setCurrentProgress(Math.round(latest * 100));
      
      // Update current stage number
      const stage = Math.max(1, Math.min(totalStages, Math.ceil(latest * totalStages)));
      setCurrentStageNum(stage);
    });

    return () => {
      unsubscribeScroll();
    };
  }, [scrollYProgress, totalStages]);

  const scrollToStage = (index: number) => {
    if (stageRefs && stageRefs[index]?.current) {
      stageRefs[index].current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <>
      <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:right-auto z-50 md:w-auto"
          >
            <div className="bg-white/95 backdrop-blur-lg rounded-full shadow-2xl border-2 border-gray-200 px-4 md:px-8 py-2.5 md:py-3 w-full md:min-w-[600px] md:max-w-[90vw] pointer-events-auto">
              <div className="flex items-center gap-3 md:gap-6">
                {/* Progress Text */}
                <div className="flex-shrink-0">
                  <div className="text-[9px] md:text-xs text-gray-500 font-semibold uppercase tracking-wider font-pally">
                    Progress
                  </div>
                  <motion.div 
                    className="text-sm md:text-lg font-bold text-[#fa3035] font-pally"
                    key={currentProgress}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {currentProgress}%
                  </motion.div>
                </div>

                {/* Progress Bar with Stage Markers */}
                <div className="flex-1 relative min-w-0">
                  {/* Progress Bar */}
                  <div className="h-1.5 md:h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#fa3035] to-[#800000] rounded-full relative"
                      style={{ width: progressWidth }}
                    >
                      {/* Animated shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Clickable Stage Markers */}
                  <div className="absolute -top-2.5 md:-top-3 left-0 right-0 flex justify-between px-0.5">
                    {Array.from({ length: totalStages }).map((_, idx) => {
                      const isActive = currentStageNum === idx + 1;
                      const isCompleted = currentStageNum > idx + 1;
                      
                      return (
                        <motion.button
                          key={idx}
                          onClick={() => scrollToStage(idx)}
                          className="group relative cursor-pointer"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <motion.div
                            className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center text-[10px] md:text-xs font-bold shadow-lg transition-all"
                            animate={{
                              borderColor: isCompleted || isActive ? '#fa3035' : '#d1d5db',
                              backgroundColor: isActive ? '#fa3035' : '#ffffff',
                              scale: isActive ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className={isActive ? 'text-white font-bold' : isCompleted ? 'text-[#fa3035] font-bold' : 'text-gray-400'}>
                              {idx + 1}
                            </span>
                          </motion.div>
                          
                          {/* Tooltip - Hidden on mobile */}
                          <div className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
                              Stage {idx + 1}
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Completion Icon */}
                <motion.div
                  className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#fa3035] to-[#800000] flex items-center justify-center"
                  animate={{ 
                    rotate: currentProgress === 100 ? 360 : 0,
                    scale: currentProgress === 100 ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-white text-xs md:text-sm">
                    {currentProgress === 100 ? '✓' : '🔄'}
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}