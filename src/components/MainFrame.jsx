import AddCardButton from "./cards+addButton/AddButton";
import TrainingCard from "./cards+addButton/Card";

function MainFrame() {
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="w-screen relative overflow-y-auto mt-3">
        <div className="flex flex-col gap-3 w-full max-w-md items-center ">
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
        </div>
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 mb-2">
          <AddCardButton />
        </div>
      </div>
    </div>
  );
}

export default MainFrame;
