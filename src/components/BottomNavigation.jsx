import { Link } from "react-router-dom";
import trainingIcon from "../assets/training.svg";
import progressIcon from "../assets/progress.svg";
import settingsIcon from "../assets/settings.svg";

function BottomNavigation() {
  return (
    <div className="w-screen h-[6rem] mt-auto bg-[#EBF5FA]">
      <div className="bg-red-300 px-[3.875rem] mt-[1.875rem] mb-[0.25rem]  ">
        <div className="flex flex-row justify-between bg-green-500">
          <img src={trainingIcon} alt="training icon" />
          <img src={progressIcon} alt="progress icon" />
          <img src={settingsIcon} alt="settings icon" />
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default BottomNavigation;
