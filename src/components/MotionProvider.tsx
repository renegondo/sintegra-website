// components/MotionProvider.tsx
"use client";

import { MotionConfig } from "motion/react";

type MotionProviderProps = {
  children: React.ReactNode;
};

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionConfig>
  );
}
