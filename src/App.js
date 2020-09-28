import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Profile from "./pages/Profile";
import Work from "./pages/Work";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Midamo from "./pages/Midamo";
import Header from "./components/Header";
import Gundelik from "./pages/Gundelik";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // const [mousePos, setMousePos] = useState({
  //   x: 10,
  //   y: 10,
  // });

  // const onMouseMove = (event) => {
  //   const { pageX: x, pageY: y } = event;
  //   setMousePos({ x, y });
  // };

  // useEffect(() => {
  //   document.addEventListener("mousemove", onMouseMove);
  //   return () => {
  //     document.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          {/* <div
            // style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
            className="cursor"
          ></div> */}
          <Header />
          <Switch>
            <Route exact path="/" component={Profile} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/midamo" component={Midamo} />
            <Route exact path="/gundelik" component={Gundelik} />
          </Switch>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
