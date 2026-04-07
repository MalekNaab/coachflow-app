import { useState } from 'react';
import { motion } from 'motion/react';

interface ToggleProps {
  enabled?: boolean;
  onChange?: (enabled: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function AnimatedToggle({
  enabled = false,
  onChange,
  label,
  description,
  disabled = false,
  size = 'md',
}: ToggleProps) {
  const [isEnabled, setIsEnabled] = useState(enabled);

  const handleToggle = () => {
    if (disabled) return;
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    onChange?.(newValue);
  };

  const sizes = {
    sm: {
      track: 'w-9 h-5',
      thumb: 'w-3.5 h-3.5',
      translate: 16,
    },
    md: {
      track: 'w-11 h-6',
      thumb: 'w-4 h-4',
      translate: 20,
    },
    lg: {
      track: 'w-14 h-7',
      thumb: 'w-5 h-5',
      translate: 28,
    },
  };

  const sizeConfig = sizes[size];

  return (
    <div className="flex items-center justify-between gap-4">
      {(label || description) && (
        <div className="flex-1">
          {label && (
            <label
              className={`block font-medium text-stone-900 ${
                disabled ? 'opacity-50' : 'cursor-pointer'
              }`}
              onClick={handleToggle}
            >
              {label}
            </label>
          )}
          {description && (
            <p className={`text-sm text-stone-500 ${disabled ? 'opacity-50' : ''}`}>
              {description}
            </p>
          )}
        </div>
      )}

      <button
        type="button"
        role="switch"
        aria-checked={isEnabled}
        disabled={disabled}
        onClick={handleToggle}
        className={`
          ${sizeConfig.track}
          relative inline-flex items-center rounded-full
          transition-all duration-300 ease-out
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          ${
            isEnabled
              ? 'bg-emerald-600 hover:bg-emerald-700 shadow-sm'
              : 'bg-stone-300 hover:bg-stone-400'
          }
          focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
          active:scale-95
        `}
      >
        <motion.span
          layout
          className={`
            ${sizeConfig.thumb}
            inline-block rounded-full bg-white shadow-md
          `}
          initial={false}
          animate={{
            x: isEnabled ? sizeConfig.translate : 4,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
        />
      </button>
    </div>
  );
}

// Simple toggle without label (inline use)
export function SimpleToggle({
  enabled = false,
  onChange,
  disabled = false,
  size = 'md',
}: Omit<ToggleProps, 'label' | 'description'>) {
  const [isEnabled, setIsEnabled] = useState(enabled);

  const handleToggle = () => {
    if (disabled) return;
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    onChange?.(newValue);
  };

  const sizes = {
    sm: {
      track: 'w-9 h-5',
      thumb: 'w-3.5 h-3.5',
      translate: 16,
    },
    md: {
      track: 'w-11 h-6',
      thumb: 'w-4 h-4',
      translate: 20,
    },
    lg: {
      track: 'w-14 h-7',
      thumb: 'w-5 h-5',
      translate: 28,
    },
  };

  const sizeConfig = sizes[size];

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEnabled}
      disabled={disabled}
      onClick={handleToggle}
      className={`
        ${sizeConfig.track}
        relative inline-flex items-center rounded-full
        transition-all duration-300 ease-out
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${
          isEnabled
            ? 'bg-emerald-600 hover:bg-emerald-700 shadow-sm'
            : 'bg-stone-300 hover:bg-stone-400'
        }
        focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
        active:scale-95
      `}
    >
      <motion.span
        layout
        className={`
          ${sizeConfig.thumb}
          inline-block rounded-full bg-white shadow-md
        `}
        initial={false}
        animate={{
          x: isEnabled ? sizeConfig.translate : 4,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      />
    </button>
  );
}

// Toggle group for multiple options
interface ToggleGroupOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface ToggleGroupProps {
  options: ToggleGroupOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function ToggleGroup({ options, value, onChange, className = '' }: ToggleGroupProps) {
  return (
    <div
      className={`inline-flex items-center bg-stone-100 rounded-lg p-1 gap-1 ${className}`}
      role="radiogroup"
    >
      {options.map((option) => {
        const isActive = value === option.value;
        return (
          <button
            key={option.value}
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(option.value)}
            className={`
              relative px-4 py-2 rounded-md text-sm font-medium
              transition-all duration-200
              ${
                isActive
                  ? 'text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
              active:scale-95
            `}
          >
            {isActive && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-white rounded-md shadow-sm"
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {option.icon}
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
