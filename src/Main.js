import React from "react";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import BridgeList from "./Components/BridgeList";
import Contact from "./Components/Contact";
import Collection from "./Components/Collection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Rate from "./Components/Rate";



function Main() {
  return (
    <Router>
      <div className="wrapper">
        <Header/>
        <Nav />
        <Routes>
          <Route path="/" element={<BridgeList />}/>
            <Route path='/rate' element={<Rate />}>
                  <Route path=":rateid" element={<Rate />}>
            </Route>
          </Route>
          <Route path="/collection" element={<Collection />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default Main;
