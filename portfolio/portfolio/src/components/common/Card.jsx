import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const Card = ({
  children,
  variant = 'default',
  padding = 'md',
  hover = true,
  className,
  ...props
}) => {
  const baseStyles = 'rounded-xl transition-all duration-300';

  const variants = {
    default: 'glass',
    elevated: 'glass shadow-lg',
    outline: 'border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800',
    filled: 'bg-white dark:bg-gray-800 shadow-md'
  };

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  const cardClassName = clsx(
    baseStyles,
    variants[variant],
    paddings[padding],
    hover && 'hover:shadow-xl',
    className
  );

  return (
    <motion.div
      className={cardClassName}
      whileHover={hover ? { y: -5 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;