import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import Menu from "./components/Menu.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="h-screen w-screen">
      <div className="fixed top-0 left-0 h-screen w-screen">
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
