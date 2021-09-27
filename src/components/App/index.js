import Contact from "../Contact";
import Home from "../Home";
import Nav from "../Nav";
import Presentation from "../Presentation";
import Projects from "../Projects";
import Skills from "../Skills";
import "./app.scss";
import { Route } from "react-router-dom";
import Footer from "../Footer";
import { useState } from "react";

function App() {
    const [burgerToggle, setBurgerToggle] = useState(false);

  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <div className="app">
      <Nav burgerToggle={burgerToggle} setBurgerToggle={setBurgerToggle}  />
        <Route exact to="/">
          <Home />
        </Route>
        <Route exact to="/Presentation">
          <Presentation />
        </Route>
        <Route exact to="/Competences">
          <Skills />
        </Route>
        <Route exact to="/Projets">
          <Projects />
        </Route>
        <Route exact to="Contact">
          <Contact />
        </Route>
        <Footer />
    </div>
  );
}

export default App;
