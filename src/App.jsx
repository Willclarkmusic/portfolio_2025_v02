import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import ParticleSystem from "./components/ParticlesScene";
import { useInView } from "react-intersection-observer";


function App() {
  const { ref, inView } = useInView({
    threshold: 0.1, // customize when to trigger
  });

  return (
    <div className="h-screen max-w-screen">
      <div ref={ref} className="absolute w-full h-[110%]">
        {inView && <ParticleSystem />}
      </div>
      <HomePage />
    </div>
  );
}

export default App;
