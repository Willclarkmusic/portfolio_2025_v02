import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import ParticleSystem from "./components/ParticlesScene";
import { MobileParams } from "./components/ScrollManager";
const { isTablet, isMobile } = MobileParams();

function App() {
  return (
    <div className="h-screen max-w-screen]">
      <div className="absolute w-full h-[110%]">
        <ParticleSystem />
      </div>
      <HomePage />
    </div>
  );
}

export default App;
