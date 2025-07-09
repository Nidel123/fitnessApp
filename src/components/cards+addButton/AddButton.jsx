import addIcon from "../../assets/addIcon.svg";

function AddCardButton() {
  return (
    <div>
      <button className="flex z-10 justify-center w-24 h-24 rounded-full bg-[#9FD9F5]">
        <img className="w-7" src={addIcon} alt="addIcon" />
      </button>
    </div>
  );
}

export default AddCardButton;
