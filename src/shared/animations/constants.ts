import type { Transition } from 'framer-motion'

interface AnimationType {
  initial: { y?: number; x?: number; opacity?: number }
  animate: { y?: number; x?: number; opacity?: number }
  exit?: { y?: number; x?: number; opacity?: number }
  transition: Transition
}

export const cellDrop: AnimationType = {
  initial: { y: -100 },
  animate: { y: 0 },
  exit: { y: 100 },
  transition: {
    duration: 0.5,
    type: 'spring',
    bounce: 0.5,
  },
}

export const slideDown: AnimationType = {
  initial: { y: -1000, opacity: 0 },
  animate: { y: 0, opacity: 100 },
  transition: {
    delay: 0.5,
    duration: 0.5,
    type: 'spring',
    bounce: 0.3,
  },
}

export const slideLeft: AnimationType = {
  initial: { x: -1000, opacity: 0 },
  animate: { x: 0, opacity: 100 },
  transition: {
    duration: 0.5,
    type: 'spring',
  },
}
