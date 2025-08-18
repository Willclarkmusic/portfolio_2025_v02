import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import ParticleSystem from "./components/ParticlesScene";
import { useInView } from "react-intersection-observer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageWithParticles />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

function HomePageWithParticles() {
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
