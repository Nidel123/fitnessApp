function CardMachineConfig({setShowMachineConfig}) {
  return (
    <div className="bg-[#F0F3F7] w-full max-w-sm max-h-[80vh] rounded-3xl flex justify-center">
      <div className="relative">
        <label className="absolute  w-30 mt-5 ml-2 text-[11px]">
          Add used machine
        </label>
      </div>
      <div className="relative flex flex-col gap-4 mt-16">
        <div>
          <label className="absolute text-[11px] ml-4 -mt-2 w-19 pl-0.5 bg-[#F0F2F5]">
            Machine Name
          </label>
          <input
            type="text"
            placeholder="Dumbell"
            className="w-78 h-14 rounded-[8px] pl-4 outline-none focus:ring-2 focus:ring-[#9FD9F5] bg-[#F7FAFF]"
          />
        </div>
        <div>
          <label className="absolute text-[11px] ml-4 -mt-2 w-19 pl-0.5 bg-[#F0F2F5]">
            Weight
          </label>
          <input
            type="text"
            placeholder="45kg"
            className="w-78 h-14 rounded-[8px] pl-4 outline-none focus:ring-2 focus:ring-[#9FD9F5] bg-[#F7FAFF]"
          />
        </div>
        <div>
          <label className="absolute text-[11px] ml-4 -mt-2 w-19 pl-0.5 bg-[#F0F2F5]">
            Reps
          </label>
          <input
            type="text"
            placeholder="3x20"
            className="w-78 h-14 rounded-[8px] pl-4 outline-none focus:ring-2 focus:ring-[#9FD9F5] bg-[#F7FAFF]"
          />
        </div>
        <div className="flex flex-row gap-6 justify-end mt-auto mb-5 font-medium text-[#2E9FD9]">
          <button onClick={() => setShowMachineConfig(false)}>Cancel</button>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

export default CardMachineConfig;
