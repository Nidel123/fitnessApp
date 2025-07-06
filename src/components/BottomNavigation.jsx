import { Link } from "react-router-dom";
import trainingIcon from "../assets/training.svg";
import progressIcon from "../assets/progress.svg";
import settingsIcon from "../assets/settings.svg";
import { useState } from "react";

function BottomNavigation() {
  const [active, setActive] = useState("training");
  return (
    <div className="w-full h-[6rem] mt-auto flex justify-around pt-4 bg-[#EBF5FA]/50">
      <div
        onClick={() => setActive("training")}
        className="flex flex-col items-center"
      >
        <div className="relative ">
          <img
            className="relative z-10 h-3.5 w-3.5"
            src={trainingIcon}
            alt="trainingIcon"
          />
          {active === "training" && (
            <div className=" w-[4.1875rem] h-8 rounded-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 bg-[#8AC7E5]/40"></div>
          )}
        </div>
        <Link className="mt-3.5">Training</Link>
      </div>
      <div
        onClick={() => setActive("progress")}
        className="flex flex-col items-center"
      >
        <div className="relative ">
          <img
            className="relative z-10 h-3.5 w-3.5"
            src={progressIcon}
            alt="progressIcon"
          />
          {active === "progress" && (
            <div className=" w-[4.1875rem] h-8 rounded-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 bg-[#8AC7E5]/40"></div>
          )}
        </div>
        <Link className="mt-3.5">Progress</Link>
      </div>
      <div
        onClick={() => setActive("settings")}
        className="flex flex-col items-center"
      >
        <div className="relative ">
          <img
            className="relative z-10 h-3.5 w-3.5"
            src={settingsIcon}
            alt="settingsIcon"
          />
          {active === "settings" && (
            <div className=" w-[4.1875rem] h-8 rounded-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 bg-[#8AC7E5]/40"></div>
          )}
        </div>
        <Link className="mt-3.5">Settings</Link>
      </div>
    </div>
  );
}

export default BottomNavigation;
