export const cellDrop = {
  initial: { y: -100 },
  animate: { y: 0 },
  exit: { y: 100 },
  transition: {
    duration: 0.5,
    type: 'spring',
    bounce: 0.5,
  },
}

export const slideDown = {
  initial: { y: -1000, opacity: 0 },
  animate: { y: 0, opacity: 100 },
  transition: {
    delay: 0.5,
    duration: 0.5,
    type: 'spring',
    bounce: 0.3,
  },
}

export const slideLeft = {
  initial: { x: -1000, opacity: 0 },
  animate: { x: 0, opacity: 100 },
  transition: {
    duration: 0.5,
    type: 'spring',
  },
}
