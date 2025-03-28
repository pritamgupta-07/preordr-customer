"use client";

import { useSelector } from "react-redux";
import { Mode } from "@/lib/store/features/colorMode/colorModeSlice";
import { useEffect } from "react";

const ThemeSetter = () => {
  const mode = useSelector(
    (state: { colorMode: { mode: Mode } }) => state.colorMode.mode
  );
  
   // Update the data-theme attribute whenever the mode changes
   useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    }, [mode]);
  
  return null;
}

export default ThemeSetter;