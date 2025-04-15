import React, { useState } from "react";
import { vendorCategories } from "@/data/sample";

interface ModalBoxProps {
  className?: string,
  listItems: string[]
}

const Modals: React.FC<ModalBoxProps> = ({className, listItems}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={`absolute w-[175px] max-h-[60vh] bg-white shadow-lg rounded-lg overflow-y-auto flex flex-col gap-1 p-2 z-50 border border-gray-200 animate-fade-in-up ${className}`}
      role="menu">
      {listItems && listItems.map((value, index) => (
        <button
          key={index}
          className={`px-3 py-2 text-left rounded-md transition-colors ${
            index === activeIndex
              ? "bg-[var(--color-secondary-500)] text-[var(--color-text-secondary-100)] font-medium"
              : "hover:bg-gray-100 text-gray-800"
          }`}
          onClick={() => {
            setActiveIndex(index);
          }}
          role="menuitem">
          {value}
        </button>
      ))}
    </div>
  );
};

export default Modals;
