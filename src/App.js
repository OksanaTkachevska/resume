// src/App.jsx// "learn react"
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/homePage.jsx";
import { AboutPage } from "./pages/about/about.jsx";
import { NotFound } from "./pages/notFound.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;

