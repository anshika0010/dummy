import LandingPage from "./components/LandingPage";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
