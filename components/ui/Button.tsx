import React from "react";

export default function Button({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "filled" | "outline";
}) {
  const baseClasses = "px-6 py-2 rounded-full outline-1";
  const filledClasses = "bg-black text-white";

  const variantClasses = variant === "filled" ? filledClasses : baseClasses;

  return <div className={`${baseClasses} ${variantClasses}`}>{children}</div>;
}
