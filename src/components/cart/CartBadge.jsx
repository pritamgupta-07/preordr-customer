// "use client"
import Image from "next/image";
import React from "react";

const cartItem = [
  {
    name: "Item Name",
    url: "https://placehold.co/400x400/909a90/FFFFFF/png",
  },
  {
    name: "Item Name",
    url: "https://placehold.co/400x400/909a90/FFFFFF/png",
  },
  {
    name: "Item Name",
    url: "https://placehold.co/400x400/909a90/FFFFFF/png",
  },
  {
    name: "Item Name",
    url: "https://placehold.co/400x400/909a90/FFFFFF/png",
  },
];
const maxVisible = 3; // Number of avatars to show
const extraCount = cartItem.length - maxVisible;

const CartBadge = () => {
  return (
    <div className="fixed bottom-10 right-10 bg-[var(--color-primary-500)] py-2 px-4 flex gap-2 items-center rounded-2xl cursor-pointer active:scale-[.98]">
      <div className="flex items-center">
        {cartItem.slice(0, maxVisible).map((items, index) => (
          <Image
            key={index}
            src="https://placehold.co/10x10/909a90/FFFFFF/png"
            className="rounded-full object-contain w-8 h-8 bg-gray-400 border-2 border-white"
            style={{ marginLeft: index !== 0 ? -20 : 0 }}
            width={30}
            height={30}
            alt="Cart Item"
          />
        ))}

        {extraCount > 0 && (
          <div
            className="w-8 h-8 rounded-full bg-gray-400 text-white text-xs flex items-center justify-center border-2 border-white"
            style={{ marginLeft: -16 }}>
            +{extraCount}
          </div>
        )}
      </div>

      <div className="text-white flex flex-col gap-1 text-sm">
        <span className="font-bold">View Cart</span>
        <span>Item 1</span>
      </div>

      <div className="flex justify-center items-center w-8 h-8 rounded-full border-2 border-dashed border-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </div>
  );
};

export default CartBadge;
