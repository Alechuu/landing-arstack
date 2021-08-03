import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Fondo from "./assets/Fondo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
/* import Home from "./components/Home";
import Contacto from "./components/Contacto"; */
const Home = lazy(() => import("./components/Home"));
const Contacto = lazy(() => import("./components/Contacto"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundImage: `url(${Fondo})`,
        }}
      >
        <Nav />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contacto">
              <Contacto />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
