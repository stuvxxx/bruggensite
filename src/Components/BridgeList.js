import React, { useState } from "react";  
import Data from "../Data/data.json"
import BridgeListItem from "./BridjeListItem";



function BridgeList() {
    const fullData = Data.Bruggen.map((x) => {
        var o = Object.assign({}, x);
        o.isFlipped = false
        return o
    })

    const [nbmToShow, setnbmToShow] = useState(50)
    const [fullList, setFullList] = useState(fullData.slice(0, 50))



    
    function handleFlip(x) {
        const newArray = [...fullList]
        newArray[x].isFlipped ? newArray[x].isFlipped = false : newArray[x].isFlipped = true
        setFullList(newArray)
        const card = document.getElementById(x)
        card.classList.toggle("is-flipped")
    }

    function handleSearch(e) {
        let newArray = []
        fullData.filter((val) => {
            if ( e === "") {
                setFullList(fullData.slice(0,50))
            } 
            if (val.Naam.toLowerCase().includes(e.toLowerCase()) || val.Waar.toLowerCase().includes(e.toLowerCase()) ) {
                newArray.push(val)
            }
            setFullList(newArray.slice(0,50))
        })
    }

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY ) >= (document.body.scrollHeight - 200) && fullList.length > 49) {
            console.log(window.innerHeight)
            console.log(document.body.scrollHeight)
            setnbmToShow(prevState => {
              return prevState + 50
          })
          setFullList(fullData.slice(0, nbmToShow))
        }
    };

    return (
        <div>
            <div className="input-container">
        <input type="text" 
        onChange={event => {handleSearch(event.target.value)}}
        placeholder="zoek die brug..."
        className="input-search"
        />
        </div>
        <div className="bridge-list-container">  
                {fullList.map((x) => {
                    return(
                  <BridgeListItem 
                  name={x.Naam} 
                  loc={x.Waar} 
                  link={x.Link} 
                  key={fullList.indexOf(x)}
                  id={fullList.indexOf(x)}
                  handleFlip={handleFlip}
                  flipped={fullList[fullList.indexOf(x)].isFlipped}
                  />)  
                })}
        </div>
    </div>
    )
}

export default BridgeList