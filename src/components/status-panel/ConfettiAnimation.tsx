import Lottie from 'lottie-react'
import animationData from '@/assets/lootie/confetti.json'
const ConfettiAnimation = () => {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{
        height: '70vh',
        width: '100vw',
        position: 'absolute',
      }}
    />
  )
}

export default ConfettiAnimation
