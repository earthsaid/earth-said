import Portfolio from "./Pages/Portfolio";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-canvas overflow-x-hidden">
      <div className="container mx-auto flex justify-center px-2 sm:px-0">
        <div className="w-full max-w-275 h-full border-l border-line">
          <Portfolio />
        </div>
      </div>
    </div>
  );
}
