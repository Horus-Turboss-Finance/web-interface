import { BrowserRouter } from "react-router-dom";
import { hydrateRoot } from 'react-dom/client';
import App from "./app";


hydrateRoot(
  document.getElementById("root")!,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);