import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

function Headertext({ children }: ChildrenProps) {
  return (
    <div className="text-orange-400  drop-shadow-sm text-center font-bodoni text-2xl sm:text-3xl font-bold tracking-wide">
      {children}
    </div>
  );
}

export default Headertext;
