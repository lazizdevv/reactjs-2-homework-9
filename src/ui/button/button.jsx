import React from "react";

export const Button = ({
  variant = "primary",
  onClick,
  type,
  children,
  className = "",
  ...rest
}) => {
  const baseStyle =
    "px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
    success: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500",
    warning:
      "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500",
  };

  const variantStyle = variants[variant] || variants.primary;

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
