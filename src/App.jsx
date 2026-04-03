import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HeroPage from "./components/Heropage.jsx";
import HomePage from "./components/Homepage.jsx";
import ResumePage from "./components/ResumePage.jsx";
import MyWorkPage from "./components/MyWorkPage.jsx";
import WhatsNewPage from "./components/WhatsNewPage.jsx";
import "./index.css";

export default function App() {
  const [page, setPage] = useState("hero");

  return (
    <Routes>
  <Route path="/" element={<HeroPage />} />
  <Route path="/home" element={<HomePage />} />
  <Route path="/resume" element={<ResumePage />} />
  <Route path="/my-work" element={<MyWorkPage />} />
  <Route path="/whats-new" element={<WhatsNewPage />} />
  </Routes>
  );
}