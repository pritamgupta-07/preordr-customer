"use client";
import Link from "next/link";
import Switch from "../switch/Switch";
import Searchbar from "./Searchbar";
import NavbarPlace from "./NavbarPlace";
import NavbarQR from "./NavbarQR";
import { useEffect, useState } from "react";
import Modals from "../modals/Modals";
import NavbarUserOptions from "./NavbarUserOptions";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    // Only run if window is defined (avoids SSR errors)
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case user reloads while already scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex flex-col container mx-auto p-4 gap-2">
      {/* Logo */}
      <div className="flex justify-between w-full">
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-[var(--color-primary-500)] text-xl sm:text-2xl">
            PreOrdr
          </h1>
        </div>
        {/* Middle Section */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <NavbarPlace name={"Place"} />

            {/* Search Input */}
            <div className="mx-2 mr-4">
              <Searchbar />
            </div>

            {/* Scan QR Icon */}
            <NavbarQR />
          </div>
        </div>

        {/* Veg/Non-Veg Switch, Cart, and Sign In */}
        <div className="hidden md:flex items-center gap-4">
          {/* Veg/Non-Veg Switch */}
          <span className="hidden sm:block">
            <Switch onLabel="Veg" offLabel="Non-Veg" />
          </span>

          {/* Cart Icon */}
          <span className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-bag">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </span>

          {/* CTA Button */}
          {isLoggedIn ? (
            <NavbarUserOptions />
          ) : (
            <Link
              href="/search"
              className="px-4 py-2 bg-[var(--color-primary-500)] text-[var(--color-text-primary-50)] rounded-lg hover:bg-[var(--color-primary-600)] transition-colors">
              Sign In
            </Link>
          )}
        </div>

        {/* Search Bar section for phone - search, cart, scan and others */}
        <div className="flex justify-center items-center md:hidden gap-2">
          <NavbarPlace name={"place"} />

          {/* CTA Button */}
          {isLoggedIn ? (
            <NavbarUserOptions />
          ) : (
            <Link
              href="/search"
              className="px-4 py-2 bg-[var(--color-primary-500)] text-[var(--color-text-primary-50)] rounded-lg hover:bg-[var(--color-primary-600)] transition-colors">
              Sign In
            </Link>
          )}
        </div>
      </div>

      <div
        className={`flex md:hidden sm:justify-between items-center gap-4 w-full transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 bg-white shadow-md z-50 p-4"
            : "relative bg-transparent"
        }`}>
        <Searchbar className="flex-grow" />
        <NavbarQR />
        <Switch onLabel="Veg" offLabel="Non-Veg" />
      </div>
    </nav>
  );
};

export default Navbar;
