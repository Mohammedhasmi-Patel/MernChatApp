import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./Context/AuthProvider.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SocketProvider } from "./Context/SocketContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <SocketProvider>
        <App />
      </SocketProvider>
    </AuthProvider>
  </BrowserRouter>
);
