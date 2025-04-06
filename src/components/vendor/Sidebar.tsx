"use client";
import { vendorCategories } from "@/data/sample";
import React, { useState } from "react";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="hidden md:block w-[200px] border-r border-[var(--color-background-700)] h-screen">
      {/* Heading for the sidebar */}
      <div className="text-center py-6  border-b border-[var(--color-background-700)]">
        <h1 className="font-bold text-2xl text-[var(--color-text-primary-900)]">
          Vendors Store
        </h1>
      </div>

      {/* Content of the sidebar */}
      <ul className="flex flex-col gap-1 p-2">
        {vendorCategories.map((value, index) => (
          <li
            className={`p-2 ${
              activeIndex === index
                ? "opacity-100 bg-[var(--color-primary-500)] text-[var(--color-text-secondary-100)]"
                : "hover:bg-[var(--color-surface-500)]"
            } rounded-md duration-500 select-none`} onClick={() => setActiveIndex(index)}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
