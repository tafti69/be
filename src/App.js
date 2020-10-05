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
import AnimatedCursor from "react-animated-cursor";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <AnimatedCursor
            innerSize={12}
            outerSize={18}
            color="251, 249, 247"
            outerAlpha={0.2}
            innerScale={0.5}
            outerScale={5}
          />
          <Header />
          <Switch>
            <Route exact path="/" component={Profile} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/midamo" component={Midamo} />
            <Route exact path="/gundelik" component={Gundelik} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
