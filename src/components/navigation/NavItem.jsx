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
      <div className="relative ">
        <img className="relative z-10 h-3.5 w-3.5" src={icon} alt={label} />
        {isActive && (
          <div className="w-16 h-8 rounded-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 bg-[#8AC7E5]/40"></div>
        )}
      </div>
      <Link className="mt-3.5">{label}</Link>
    </div>
  );
}

export default React.memo(NavItem);
