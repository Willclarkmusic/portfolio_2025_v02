import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import Menu from "./components/Menu.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="max-md w-screen">
      <div className="fixed backdrop-blur-3xl z-10 bg-transparent w-full h-[5%]">
        <Menu
          section={section}
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
      </div>

      <HomePage />
    </div>
  );
}

export default App;
