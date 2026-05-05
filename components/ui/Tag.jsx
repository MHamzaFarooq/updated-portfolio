import React from "react";

function Tag({ children }) {
  return (
    <div className="text-[13px] font-retail px-3 py-2 font-bold rounded-full outline-1 width-fit-content">
      {children}
    </div>
  );
}

export default Tag;
