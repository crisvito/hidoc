import { BrowserRouter } from "react-router-dom";
import { RouteConfig } from "./config";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <RouteConfig />
    </BrowserRouter>
  );
}

export default App;
