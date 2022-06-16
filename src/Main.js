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
      console.log(collection)
    }

    function handleSee(name, index) {
      if (document.getElementById(name).className === "collected-card-unseen"){
      document.getElementById(name).className = "collected-card-seen"
      const seenCard = collection.find(x => x.Naam === name)
      seenCard.isSeen = true
      collection[index] = seenCard
      setCollection(collection) }
      else {
      console.log("Some action!")}
    }



  return (
    <Router>
      <div className="wrapper">
        <Header/>
        <Nav />
        <Routes>
          <Route path="/" element={<BridgeList collection={collection} func={pullData} />}/>
          <Route path="/collection" element={<Collection collection={collection}
                                                         handleSee={handleSee}        
                                                                 />}
          />
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default Main;
