"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface DropdownOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  error?: string;
  label?: string;
  required?: boolean;
}

export function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  className,
  variant = "default",
  size = "md",
  error,
  label,
  required = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const selectedOption = options.find(option => option.value === value);

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg"
  };

  const variantClasses = {
    default: cn(
      "bg-white border-2 border-gray-300 text-gray-900",
      "hover:border-[#4A90E2] focus:border-[#4A90E2] focus:ring-2 focus:ring-[#4A90E2]/20",
      error && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
    ),
    outline: cn(
      "bg-transparent border-2 border-[#4A90E2] text-[#4A90E2]",
      "hover:bg-[#4A90E2]/5 focus:bg-[#4A90E2]/5 focus:ring-2 focus:ring-[#4A90E2]/20",
      error && "border-red-500 text-red-500 focus:border-red-500 focus:ring-red-500/20"
    ),
    ghost: cn(
      "bg-transparent border-2 border-transparent text-gray-700",
      "hover:bg-gray-100 hover:border-gray-200 focus:bg-white focus:border-[#4A90E2] focus:ring-2 focus:ring-[#4A90E2]/20",
      error && "border-red-500 text-red-500 focus:border-red-500 focus:ring-red-500/20"
    ),
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        if (isOpen && focusedIndex >= 0) {
          const option = options[focusedIndex];
          if (!option.disabled) {
            onChange(option.value);
            setIsOpen(false);
            setFocusedIndex(-1);
          }
        } else {
          setIsOpen(true);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setFocusedIndex(-1);
        triggerRef.current?.focus();
        break;
      case "ArrowDown":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          const nextIndex = focusedIndex < options.length - 1 ? focusedIndex + 1 : 0;
          setFocusedIndex(nextIndex);
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          const prevIndex = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
          setFocusedIndex(prevIndex);
        }
        break;
    }
  };

  const handleSelect = (option: DropdownOption) => {
    if (option.disabled) return;
    onChange(option.value);
    setIsOpen(false);
    setFocusedIndex(-1);
    triggerRef.current?.focus();
  };

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-semibold text-[#1C1C1C] mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <button
        ref={triggerRef}
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={cn(
          "w-full flex items-center justify-between rounded-xl transition-all duration-200",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          sizeClasses[size],
          variantClasses[variant]
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={label ? undefined : "dropdown-label"}
        role="combobox"
      >
        <span className="flex items-center">
          {selectedOption?.icon && (
            <span className="mr-3 flex-shrink-0">
              {selectedOption.icon}
            </span>
          )}
          <span className={cn(
            "truncate",
            !selectedOption && "text-gray-500"
          )}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </span>
        
        <svg
          className={cn(
            "ml-3 h-5 w-5 transition-transform duration-200 flex-shrink-0",
            isOpen && "transform rotate-180",
            error ? "text-red-500" : "text-gray-400"
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {error && (
        <p className="mt-2 text-sm text-red-600 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </p>
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-2xl max-h-60 overflow-auto">
          <ul role="listbox" className="py-2">
            {options.map((option, index) => (
              <li key={option.value} role="option" aria-selected={option.value === value}>
                <button
                  type="button"
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => setFocusedIndex(index)}
                  disabled={option.disabled}
                  className={cn(
                    "w-full flex items-center px-4 py-3 text-left transition-colors duration-150",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    option.value === value && "bg-[#4A90E2]/10 text-[#4A90E2]",
                    focusedIndex === index && option.value !== value && "bg-gray-50",
                    !option.disabled && option.value !== value && "hover:bg-gray-50",
                    option.disabled && "text-gray-400"
                  )}
                >
                  {option.icon && (
                    <span className="mr-3 flex-shrink-0">
                      {option.icon}
                    </span>
                  )}
                  <span className="truncate">{option.label}</span>
                  {option.value === value && (
                    <svg
                      className="ml-auto h-5 w-5 text-[#4A90E2] flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              </li>
            ))}
            
            {options.length === 0 && (
              <li className="px-4 py-3 text-gray-500 text-center">
                No options available
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

interface MultiSelectProps {
  options: DropdownOption[];
  values: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  maxSelections?: number;
  label?: string;
  required?: boolean;
  error?: string;
}

export function MultiSelect({
  options,
  values,
  onChange,
  placeholder = "Select options",
  disabled = false,
  className,
  maxSelections,
  label,
  required = false,
  error,
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleOption = (optionValue: string) => {
    if (disabled) return;
    
    const isSelected = values.includes(optionValue);
    
    if (isSelected) {
      onChange(values.filter(v => v !== optionValue));
    } else {
      if (!maxSelections || values.length < maxSelections) {
        onChange([...values, optionValue]);
      }
    }
  };

  const selectedOptions = options.filter(option => values.includes(option.value));

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-semibold text-[#1C1C1C] mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 text-base rounded-xl transition-all duration-200",
          "bg-white border-2 border-gray-300 text-gray-900",
          "hover:border-[#4A90E2] focus:border-[#4A90E2] focus:ring-2 focus:ring-[#4A90E2]/20",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center flex-1 min-w-0">
          {selectedOptions.length > 0 ? (
            <div className="flex flex-wrap gap-1">
              {selectedOptions.slice(0, 3).map((option) => (
                <span
                  key={option.value}
                  className="inline-flex items-center px-2 py-1 bg-[#4A90E2]/10 text-[#4A90E2] text-sm rounded-lg"
                >
                  {option.label}
                </span>
              ))}
              {selectedOptions.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-lg">
                  +{selectedOptions.length - 3} more
                </span>
              )}
            </div>
          ) : (
            <span className="text-gray-500 truncate">{placeholder}</span>
          )}
        </div>
        
        <svg
          className={cn(
            "ml-3 h-5 w-5 transition-transform duration-200 flex-shrink-0",
            isOpen && "transform rotate-180",
            error ? "text-red-500" : "text-gray-400"
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {error && (
        <p className="mt-2 text-sm text-red-600 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </p>
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-2xl max-h-60 overflow-auto">
          <div className="py-2">
            {options.map((option) => {
              const isSelected = values.includes(option.value);
              const isDisabled = option.disabled || (maxSelections && !isSelected && values.length >= maxSelections);
              
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleToggleOption(option.value)}
                  disabled={isDisabled}
                  className={cn(
                    "w-full flex items-center px-4 py-3 text-left transition-colors duration-150",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    isSelected && "bg-[#4A90E2]/10 text-[#4A90E2]",
                    !isDisabled && !isSelected && "hover:bg-gray-50",
                    isDisabled && "text-gray-400"
                  )}
                >
                  <div className={cn(
                    "w-5 h-5 border-2 rounded mr-3 flex items-center justify-center transition-colors duration-150",
                    isSelected ? "bg-[#4A90E2] border-[#4A90E2]" : "border-gray-300"
                  )}>
                    {isSelected && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  
                  {option.icon && (
                    <span className="mr-3 flex-shrink-0">
                      {option.icon}
                    </span>
                  )}
                  
                  <span className="truncate">{option.label}</span>
                </button>
              );
            })}
            
            {options.length === 0 && (
              <div className="px-4 py-3 text-gray-500 text-center">
                No options available
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}