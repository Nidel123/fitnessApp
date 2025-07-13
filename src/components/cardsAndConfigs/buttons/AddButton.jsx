import addIcon from "../../../assets/addIcon.svg";

function AddCardButton({ onClick }) {
  return (
    <div>
      <button
        className="flex z-10 justify-center w-24 h-24 rounded-full bg-[#93CCF5] active:scale-120 transition ease-in-out duration-300"
        onClick={onClick}
      >
        <img className="w-7" src={addIcon} alt="addIcon" />
      </button>
    </div>
  );
}

export default AddCardButton;
