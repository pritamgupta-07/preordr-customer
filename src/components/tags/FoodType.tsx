type FoodTypeOptions = "veg" | "non-veg";

interface FoodTypeProps {
  type: FoodTypeOptions;
}

const FoodType: React.FC<FoodTypeProps> = ({ type = "veg" }) => {
  return (
    <span className="flex justify-center flex-col" title={type}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={type === "veg" ? "green" : "brown"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-square-dot"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill={type === "veg" ? "green" : "brown"}
          stroke={type === "veg" ? "green" : "brown"}
        />
      </svg>
    </span>
  );
};

export default FoodType;
