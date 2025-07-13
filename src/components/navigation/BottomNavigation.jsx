import { useState, useCallback } from "react";
import trainingIcon from "../../assets/training.svg";
import progressIcon from "../../assets/progress.svg";
import settingsIcon from "../../assets/settings.svg";

import NavItem from "./NavItem";

function BottomNavigation({ active, setActive }) {
  const handleSetActive = useCallback(
    (label) => {
      setActive(label.toLowerCase());
    },
    [setActive]
  );

  return (
    <div className="w-full mt-auto flex justify-around pt-4">
      <NavItem
        icon={trainingIcon}
        label="Training"
        isActive={active === "training"}
        onClick={handleSetActive}
      />
      <NavItem
        icon={progressIcon}
        label="Progress"
        isActive={active === "progress"}
        onClick={handleSetActive}
      />
      <NavItem
        icon={settingsIcon}
        label={"Settings"}
        isActive={active === "settings"}
        onClick={handleSetActive}
      />
    </div>
  );
}

export default BottomNavigation;
