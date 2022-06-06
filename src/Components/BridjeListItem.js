import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

function BridgeListItem({name, loc, link}) {
    return (
        <div className="list-item-container">
            <h3>{name}</h3>
            <div className="locatie">
            <p>{loc}</p>
            </div>
            <a href={link}><FontAwesomeIcon icon={faCamera} size="2x"/></a>
        </div>

    )
}

export default BridgeListItem