import { useState } from "react";
import AddCardButton from "./cardsAndConfigs/buttons/AddButton";
import TrainingCard from "./cardsAndConfigs/Card";
import CardConfig from "./cardsAndConfigs/cardConfigs/CardConfig";
import illustrationTraining from "../assets/illustrationTraining.svg";
function MainFrame() {
  const [showConfig, setShowConfig] = useState(false);
  const [showEmptyState, setShowEmptyState] = useState(true);
  return (
    <div className="flex flex-col items-center">
      <div className="w-screen relative mt-3 z-10">
        <div className="flex flex-col gap-3 w-full max-w-md items-center z-10 relative ">
          <div className="flex flex-col items-center px-4 pt-29 pb-10 space-y-4">
            <img
              className="w-43 max-w-[80%] h-auto mt-20 mr-4"
              src={illustrationTraining}
              alt="illustrationTraining"
            />
            <p className="w-60 text-center opacity-80 text-[16px] max-w-xs">
              Create a session log and it will show up here
            </p>
          </div>
        </div>

        <div
          onClick={() => setShowConfig(false)}
          className={`fixed h-screen bg-black/40 z-40 inset-0 transition-opacity duration-200 ${
            showConfig ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />

        {showConfig && (
          <div className="absolute flex justify-center w-full transition-all duration-300 opacity-100 scale-100 top-10 left-0 z-50">
            <CardConfig setShowConfig={setShowConfig} />
          </div>
        )}

        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 mb-2 z-30">
          <AddCardButton onClick={() => setShowConfig(true)} />
        </div>
      </div>
    </div>
  );
}

export default MainFrame;
