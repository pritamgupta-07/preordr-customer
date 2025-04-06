"use client"
import { useState } from "react";
import { vendorCategories } from "@/data/sample";


const MenuSearchPhone = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="flex md:hidden px-4 pt-2 pb-3 w-full fixed bottom-0 left-0 gap-3 bg-white border-t border-gray-200 shadow-sm z-50">
      <input
        className="flex-grow border border-gray-300 px-3 py-2 focus:outline-none rounded-lg focus:ring-2 focus:ring-[var(--color-secondary-500)] focus:border-transparent transition-all"
        placeholder="Search in store"
        aria-label="Search products"
      />

      <button
        className="bg-[var(--color-primary-500)] px-4 rounded-lg text-white hover:bg-[var(--color-primary-600)] active:bg-[var(--color-primary-700)] transition-colors duration-200 flex items-center justify-center min-w-[80px]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
        aria-label="Toggle menu">
        {isMenuOpen ? "Close" : "Menu"}
      </button>

      {/* MENU */}
      {isMenuOpen && (
        <div
          className="absolute bottom-[calc(100%+8px)] right-4 w-[175px] max-h-[60vh] bg-white shadow-lg rounded-lg overflow-y-auto flex flex-col gap-1 p-2 z-50 border border-gray-200 animate-fade-in-up"
          role="menu">
          {vendorCategories.map((value, index) => (
            <button
              key={index}
              className={`px-3 py-2 text-left rounded-md transition-colors ${
                index === activeIndex
                  ? "bg-[var(--color-secondary-500)] text-[var(--color-text-secondary-100)] font-medium"
                  : "hover:bg-gray-100 text-gray-800"
              }`}
              onClick={() => {
                setActiveIndex(index);
                setIsMenuOpen(false);
              }}
              role="menuitem">
              {value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuSearchPhone;
