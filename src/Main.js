import React, { useState } from "react";
import Header from "./Components/Header";
import BridgeList from "./Components/BridgeList";


function Main() {
  return (
    <div className="wrapper">
    <Header/>
    <BridgeList />
    </div>
  );
}

export default Main;
