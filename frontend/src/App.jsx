import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/config/routes";
import { ThemeProvider } from "@/context/ThemeContext";
import "@/styles/index.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;