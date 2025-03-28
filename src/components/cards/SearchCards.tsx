import Image from "next/image";
import BestSellerTag from "@/components/tags/cardsTag";
import FoodType from "../tags/FoodType";

const SearchCards = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-[var(--color-surface-300)] rounded-lg border border-[var(--color-surface-500)] hover:border-[var(--color-surface-600)] transition-all">
      {/* Image - Always square */}
      <div className="w-full sm:w-32 h-32 flex-shrink-0">
        <Image
          src="https://placehold.co/300x300/F3F4F6/D1D5DB/png"
          className="object-cover w-full h-full rounded-lg"
          width={128}
          height={128}
          alt="Menu item"
        />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <BestSellerTag name={"Popular"} className="text-xs px-2 py-1" />
            <FoodType type="veg" />
          </div>
        </div>

        <h3 className="text-lg font-semibold text-[var(--color-text-primary-900)]">Item Name</h3>

        <p className="text-[var(--color-text-primary-400)] text-sm line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum.
        </p>

        <div className="flex justify-between items-center pt-2">
          <span className="text-base font-medium text-[var(--color-text-primary-900)]">₹250</span>

          <button className="text-sm font-medium text-white bg-[var(--color-blue-accent-500)] hover:bg-blue-600 px-3 py-1.5 rounded-md transition-colors active:scale-95 select-none">
            Add +
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchCards;
