import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { URLProvider } from "./context/URLContext";
import URLForm from "./components/URLForm";
import RedirectHandler from "./components/RedirectHandler";

const App = () => {
  return (
    <Router>
      <URLProvider>
        <Routes>
          <Route path="/" element={<URLForm />} />
          <Route path="/:shortcode" element={<RedirectHandler />} />
        </Routes>
      </URLProvider>
    </Router>
  );
};

export default App;
