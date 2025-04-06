import React from "react";

interface searchbarProps {
  className?: string
}

const Searchbar = ({className = ""}: searchbarProps) => {
  return (
    <div className={`relative max-w-sm ${className}`}>
      <div className="flex items-center border border-gray-300 rounded-lg bg-[var(--color-surface-100)] focus-within:ring-2 focus-within:ring-[var(--color-primary-500)] focus-within:border-[var(--color-primary-300)] transition-all">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 text-sm bg-transparent text-[var(--color-text-primary-500)] focus:outline-none placeholder:text-gray-400"
          aria-label="Search"
        />
        <button
          type="submit"
          className="p-2 text-gray-500 hover:text-[var(--color-primary-500)] transition-colors"
          aria-label="Search button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
