import React from "react";
import { Link } from "react-router-dom";

function NavItem({ icon, label, isActive, onClick }) {
  return (
    <div
      onClick={() => {
        onClick(label);
      }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        <img className="relative z-1 w-4" src={icon} alt={label} />
        {isActive && (
          <div className="w-16 h-9 rounded-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-[#7BC2F5]/30"></div>
        )}
      </div>
      <Link className="mt-2.5 font-medium text-[15px]">{label}</Link>
    </div>
  );
}

export default React.memo(NavItem);
