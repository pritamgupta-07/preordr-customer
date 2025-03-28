interface BestSellerProps {
  name: string,
  bgColor?: string, // passes a tailwind class of color
  className?: string,
}

const BestSellerTag: React.FC<BestSellerProps> = ({name, className, bgColor = "bg-[var(--color-secondary-500)]"}) => {
  return <span className={`${bgColor} text-white px-2 py-1 uppercase text-[10px] font-semibold rounded-sm ${className}`}>
    {name}
  </span>
};

export default BestSellerTag