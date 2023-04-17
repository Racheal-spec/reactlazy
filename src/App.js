import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Pages/Contacts/Contact";
import Home from "./Pages/Home/Home";
import Recipes from "./Pages/Recipes/Recipes";
// const Contact = React.lazy(() => import("./Pages/Contacts/Contact"));
// const Home = React.lazy(() => import("./Pages/Home/Home"));
// const Recipes = React.lazy(() => import("./Pages/Recipes/Recipes"));

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

        {/* <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense> */}
      </div>
    </section>
  );
}

export default App;
