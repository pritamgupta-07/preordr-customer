"use client";

import { useAppDispatch } from "@/lib/store/hooks";
import Navbar from "@/components/navbar/Navbar";
import TopRatedRestaurants from "@/components/Sections/TopRatedRestaurants/TopRatedRestaurants";
import CartBadge from "@/components/cart/CartBadge"

export default function Home() {
  // const dispatch = useAppDispatch();

  // const handleToggleMode = () => {
  //   dispatch(toggleMode());
  // };

  return (
    <div className={`p-4 h-screen bg-[var(--color-background-100)] text-[var(--color-text-primary-900)]`}>
      <Navbar />
      <TopRatedRestaurants />
      <CartBadge />
    </div>
  );
}