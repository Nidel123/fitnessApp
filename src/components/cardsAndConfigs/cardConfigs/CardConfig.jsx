import { useState } from "react";
import addIcon from "../../../assets/addIcon.svg";
import checkIcon from "../../../assets/checkIcon.svg";
import closeIcon from "../../../assets/closeIcon.svg";
import CardMachineConfig from "./CardMachineConfig";

function CardConfig({ setShowConfig }) {
  const [checked, setChecked] = useState(true);
  const [showMachineConfig, setShowMachineConfig] = useState(false);
  const [appliedData, setAppliedData] = useState(null);
  return (
    <div className="relative bg-[#F0F3F7] w-full max-w-sm max-h-[80vh] rounded-3xl flex justify-center">
      <div className="relative">
        <label className="absolute w-30 mt-5 ml-2 text-[11px]">
          Add session log
        </label>
      </div>
      <div className="relative flex flex-col gap-4 mt-16 ">
        <div>
          <label className="absolute text-[11px] ml-4 -mt-2 w-19 pl-0.5 bg-[#F0F2F5]">
            Title (optional)
          </label>
          <input
            type="text"
            placeholder="Day 4"
            className="w-78 h-14 rounded-[8px] pl-4 outline-none focus:ring-2 focus:ring-[#9FD9F5] bg-[#F7FAFF]"
          />
        </div>
        <div>
          <label className="absolute text-[11px] ml-4 -mt-2 w-21 pl-0.5  bg-[#F0F2F5]">
            Carlories burned
          </label>
          <input
            type="text"
            placeholder="1477"
            className="w-78 h-14 rounded-[8px] pl-4 outline-none focus:ring-2 focus:ring-[#9FD9F5] bg-[#F7FAFF]"
          />
        </div>
        <div>
          <label className="absolute z-10 text-[11px] ml-4 -mt-2 w-19 pl-0.5 bg-[#F0F2F5]">
            Kilometers ran
          </label>
          <input
            type="text"
            placeholder="23"
            className={`w-78 h-14 rounded-[8px] focus:ring-2 outline-none focus:ring-[#9FD9F5] pl-4 bg-[#F7FAFF] ${
              !checked ? " opacity-50 transition cursor-not-allowed" : ""
            }`}
            disabled={!checked}
          />
          <label className="absolute right-4 top-38.5 inline-flex items-center group">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="sr-only peer"
            />
            <div
              className={`w-15 h-9 border-3 border-white rounded-3xl ${
                checked ? "bg-[#93CCF5] border-none" : "bg-[#d8dadd]"
              }`}
            ></div>
            <div
              className={` absolute w-6.5 h-6.5  flex justify-center rounded-full transition-transform duration-300 group-active:scale-130 ${
                checked
                  ? "ml-1.5 translate-x-[26px] bg-[#2E9FD9]"
                  : "bg-white ml-1.25"
              }`}
            >
              {checked ? (
                <img
                  className="flex justify-center ml-0.5 w-3"
                  src={checkIcon}
                  alt="checkIcon"
                />
              ) : (
                <img
                  className="flex justify-center w-2.5"
                  src={closeIcon}
                  alt="closeIcon"
                />
              )}
            </div>
          </label>
        </div>
        <div className="mt-2  w-40  flex flex-row ml-2 group">
          <label className="text-lg font-medium flex flex-row">
            Add Machine
            <button
              onClick={() => setShowMachineConfig(true)}
              className="w-8 h-8 ml-2 -mt-0.5 bg-[#93CCF5] rounded-full flex justify-center group-active:scale-110 transition-transform duration-250"
            >
              <img className="w-3" src={addIcon} alt="addIcon" />
            </button>
          </label>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto ml-2"></div>
        <div className="flex flex-row gap-6 justify-end mt-auto mb-5 font-medium text-[#2E9FD9]">
          <button onClick={() => setShowConfig(false)}>Cancel</button>
          <button>Add</button>
        </div>
      </div>
      <div
        onClick={() => setShowMachineConfig(false)}
        className={`absolute inset-0 rounded-3xl bg-black/30  transition-opacity duration-200 ${
          showMachineConfig ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      {showMachineConfig && (
        <div className="absolute flex justify-center w-full mt-5 transition-all duration-300 opacity-100 scale-100 top-20 left-0 z-50">
          <CardMachineConfig setShowMachineConfig={setShowMachineConfig} />
        </div>
      )}
      {showMachineConfig && (
        <div
          onClick={() => setShowMachineConfig(false)}
          className="absolute w-screen h-[70vh] z-10"
        ></div>
      )}
    </div>
  );
}

export default CardConfig;
