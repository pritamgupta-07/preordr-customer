"use client";
import { useState, useCallback, useEffect } from "react";

type SwitchProps = {
  onLabel?: string;
  offLabel?: string;
  onColor?: string;
  offColor?: string;
  thumbColor?: string;
  width?: string;
  height?: string;
  thumbSize?: string;
  isOn?: boolean;
  onChange?: (isOn: boolean) => void;
};

const Switch = ({
  onLabel = "",
  offLabel = "",
  onColor = "bg-[var(--color-secondary-500)]",
  offColor = "bg-[var(--color-surface-600)]",
  thumbColor = "bg-white",
  width = "w-16",
  height = "h-8",
  thumbSize = "w-5 h-5 sm:w-6 sm:h-6",
  isOn: controlledOn,
  onChange,
}: SwitchProps) => {
  const [isInternalOn, setIsInternalOn] = useState(false);
  const isControlled = controlledOn !== undefined;
  const [showNotification, setShowNotification] = useState(false);
  const isOn = isControlled ? controlledOn : isInternalOn;

  const toggleSwitch = useCallback(() => {
    const newValue = !isOn;
    if (!isControlled) {
      setIsInternalOn(newValue);
      setShowNotification(true);
    }
    onChange?.(newValue);
  }, [isOn, isControlled, onChange]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification(false);
    }, 1000);

    return () => clearInterval(interval);
  }, [isInternalOn]);

  return (
    <>
      {showNotification && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-[var(--color-primary-500)] text-white py-2 px-4 rounded-md">
          Changed to <b>{isOn ? onLabel : offLabel}</b>
        </div>
      )}

      <button
        role="switch"
        aria-checked={isOn}
        className={`
        ${width} ${height} relative rounded-full p-1 cursor-pointer 
        transition-colors duration-200 focus:outline-none 
        ${isOn ? onColor : offColor}
      `}
        onClick={toggleSwitch}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleSwitch();
          }
        }}>
        {/* Thumb with smooth transition */}
        <div
          className={`
          ${thumbSize} ${thumbColor} rounded-full shadow-sm absolute
          transition-all duration-200 transform top-1/2 -translate-y-1/2
          ${isOn ? "left-[calc(100%-1.5rem)]" : "left-2"}
        `}
          style={{
            left: isOn ? `calc(95% - 1.5rem)` : "0.50rem",
          }}
        />
      </button>
    </>
  );
};

export default Switch;
