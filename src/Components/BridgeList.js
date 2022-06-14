import React, { useEffect, useState } from "react";  
import Data from "../Data/data.json"
import BridgeListItem from "./BridjeListItem";
import Rate from "./Rate";




function BridgeList(props) {
    const fullData = Data.Bruggen.map((x) => {
        var o = Object.assign({}, x);
        o.isFlipped = false
        o.id = Data.Bruggen.indexOf(x)
        return o
    })


    const [isActive, setActive] = useState("false")
    const [cardTitle, setCardTitle] = useState("")
    const [cardId, setCardId] = useState("")
    const [inCollection, setInCollection] = useState([])
    const [nbmToShow, setnbmToShow] = useState(50)
    const [fullList, setFullList] = useState(fullData.slice(0, 50))

    function handleFlip(x) {
        const newArray = [...fullList]
        newArray[x].isFlipped ? newArray[x].isFlipped = false : newArray[x].isFlipped = true
        setFullList(newArray)
        const card = document.getElementById(x)
        console.log(x)
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

    function handleRate(rating, id) {
        if (rating.chill !== "" && rating.beauty !== "" && rating.memory !== "") {
        const cardToRate = fullData.find(x => id === x.id)
        const ratedCard = Object.assign(cardToRate, rating)
        console.log(ratedCard)
        fullList[id] = ratedCard
        console.log(fullList)
        const newArray = [...inCollection]
        newArray.push(ratedCard)
        setInCollection(newArray)
        handleActive()
        }
        else {
            alert("Please add some stars!")
        }
    }

    window.onscroll = function() {
        if ((window.innerHeight + window.scrollY ) >= (document.body.scrollHeight - 200) && fullList.length > 49) {
            console.log(window.innerHeight)
            console.log(document.body.scrollHeight)
            setnbmToShow(prevState => {
              return prevState + 50
          })
          setFullList(fullData.slice(0, nbmToShow))
        }
    };

    function handleAdd(title, id, inCollection) {
        console.log("rdy to add: " + title + " " + id + " " + inCollection)
        setCardTitle(title)
        setCardId(id)
        setActive(!isActive)
    }

    function handleActive() {
        setActive("true")
    }
    
    useEffect(() => {
        props.func(inCollection, fullData)
    })

    return (
        <div>
        <div className="input-container">
        <input type="text" 
        onChange={event => {handleSearch(event.target.value)}}
        placeholder="zoek die brug..."
        className="input-search"
        />
        </div>
        <div className={isActive ? "rate-no-show" : "rate-show"}>
        <Rate 
            handleRate={handleRate}
            title={cardTitle}
            id={cardId}
            handleActive={handleActive}
        />
        </div>
        <div className="bridge-list-container">  
                {fullList.map((x) => {
                    return(
                  <BridgeListItem 
                  name={x.Naam} 
                  loc={x.Waar} 
                  link={x.Link} 
                  inCollection={x.collection}
                  key={x.id}
                  id={x.id}
                  handleFlip={handleFlip}
                  flipped={fullList[fullList.indexOf(x)].isFlipped}
                  handleAdd={handleAdd}
                  />)  
                })}
        </div>
    </div>
    )
}

export default BridgeList