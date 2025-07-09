import "./App.css";
import BottomNavigation from "./components/navigation/BottomNavigation";
import MainFrame from "./components/MainFrame";
import Header from "./components/Header";
import { useState } from "react";
function App() {
  const [active, setActive] = useState("training");
  const formatLabel = (label) => label.charAt(0).toUpperCase() + label.slice(1);

  return (
    <div className="h-screen flex flex-col">
      <div>
        <Header title={formatLabel(active)} />
      </div>
      <div className="flex-1 overflow-y-auto relative">
        <MainFrame />
      </div>
      <div className="h-24">
        <BottomNavigation active={active} setActive={setActive} />
      </div>
    </div>
  );
}

export default App;
