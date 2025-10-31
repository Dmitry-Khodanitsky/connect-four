interface CheckIconProps {
  width?: number | string
  height?: number | string
  stroke?: string
  strokeWidth?: number
  className?: string
}

const CheckIcon = ({
  width = 48,
  height = 48,
  stroke = 'white',
  strokeWidth = 2,
  className = ''
}: CheckIconProps) => {
  return (
    <svg 
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M20 6L9 17L4 12"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CheckIcon