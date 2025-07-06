import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BottomNavigation from "./components/BottomNavigation";
function App() {
  return (
    <div className="h-screen flex">
      <BottomNavigation />
    </div>
  );
}

export default App;
