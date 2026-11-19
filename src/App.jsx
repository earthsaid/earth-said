import { Routes, Route } from "react-router";
import Portfolio from "./pages/Portfolio";
import PersonalSpace from "./pages/PersonalSpace";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-canvas overflow-x-hidden">
      <div className="container mx-auto flex justify-center px-2 sm:px-0">
        <div className="w-full max-w-275 h-full border-l border-line">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/personal-public-space" element={<PersonalSpace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
