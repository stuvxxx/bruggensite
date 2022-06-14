import React from "react";
import { useState } from "react";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import BridgeList from "./Components/BridgeList";
import Contact from "./Components/Contact";
import Collection from "./Components/Collection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";





function Main() {

  const [collection, setCollection] = useState("")

    function pullData(collection) {
      setCollection(collection)
    }

  return (
    <Router>
      <div className="wrapper">
        <Header/>
        <Nav />
        <Routes>
          <Route path="/" element={<BridgeList func={pullData} />}/>
          <Route path="/collection" element={<Collection collection={collection} />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default Main;
