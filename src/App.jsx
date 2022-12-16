import { BrowserRouter } from "react-router-dom";
import { RouteConfig } from "./config";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-neutral-100 dark:bg-slate-900 dark:text-white">
        <RouteConfig />
      </div>
    </BrowserRouter>
  );
}

export default App;
