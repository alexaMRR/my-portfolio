import { useState } from "react";
import HeroPage from "./components/Heropage.jsx";
import HomePage from "./components/Homepage.jsx";
import "./index.css";

export default function App() {
  // Simple client-side routing without react-router
  // Replace with <BrowserRouter> + <Routes> if you install react-router-dom
  const [page, setPage] = useState("hero");

  const navigate = (target) => setPage(target);

  return (
    <>
      {page === "hero" && <HeroPage navigate={navigate} />}
      {page === "home" && <HomePage navigate={navigate} />}
    </>
  );
}