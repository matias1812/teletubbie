import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Providers } from "./context/index.tsx";

if (!navigator.geolocation) {
  alert('Tu navegador no tiene opcion de Geolocation');
  throw new Error('Tu navegador no tiene opcion de Geolocation')
} //Si el navegador que esta usando no existe, se muestra alerta de no hay acceso

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </Providers>
  </React.StrictMode>
);
