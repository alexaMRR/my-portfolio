import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HeroPage from "./components/Heropage.jsx";
import HomePage from "./components/Homepage.jsx";
import ProgramOrgsPage from "./components/ProgramOrgsPage.jsx";
import MyWorkPage from "./components/MyWorkPage.jsx";
import TLDR from "./components/TLDR.jsx";
import "./index.css";

export default function App() {
  const [page, setPage] = useState("hero");

  return (
    <Routes>
  <Route path="/" element={<HeroPage />} />
  <Route path="/home" element={<HomePage />} />
  <Route path="/orgs" element={<ProgramOrgsPage />} />
  <Route path="/my-work" element={<MyWorkPage />} />
  <Route path="/tldr" element={<TLDR />} />
  </Routes>
  );
}