import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import Construction from "./projects/Construction.tsx";
import Fitness from "./projects/Fitness.tsx";
import Restaurant from "./projects/Restaurant.tsx";
import EcoStore from "./projects/EcoStore.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/construction" element={<Construction />} />
        <Route path="/project/fitness" element={<Fitness />} />
        <Route path="/project/restaurant" element={<Restaurant />} />
        <Route path="/project/ecostore" element={<EcoStore />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
