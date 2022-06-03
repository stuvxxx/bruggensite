import React, { useState } from "react";  
import Data from "../Data/data.json"
import BridgeListItem from "./BridjeListItem";



function BridgeList() {
    const fullData = Data.Bruggen
    const [fullList, setFullList] = useState(fullData)
    const [fullNameList, setFullNameList] = useState(fullData.map(x => x.Naam))
    const [fullLinkList, setLinkNameList] = useState(fullData.map(x => x.Link))
    const [fullLocationList, setFullLocationList] = (fullData.map(x => x.Waar))

    const [searchTerm, setSearchTerm] = useState('')





    

    return (
        <div className="bridge-list-container">  
        <input type="text" 
               onChange={event => {setSearchTerm(event.target.value)}}
               placeholder="zoek die brug..."
               />
            <ul>
                {fullList.filter((val) => {
                    if (searchTerm === "") {
                        return val 
                    } else if (val.Naam.toLowerCase().includes(searchTerm.toLowerCase()) || val.Waar.toLowerCase().includes(searchTerm.toLowerCase()) ) {
                        return val
                    }
                })
                .map((x) => {
                    return(
                  <BridgeListItem name={x.Naam} loc={x.Waar} link={x.Link} key={fullList.indexOf(x)}/>)  
                })}
            </ul>
        </div>
    )
}

export default BridgeList