import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Pages/Contacts/Contact";
import Home from "./Pages/Home/Home";
import Recipes from "./Pages/Recipes/Recipes";

function App() {
  return (
    <section>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
