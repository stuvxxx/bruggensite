import React from "react";

function BridgeListItem({name, loc, link}) {
    return (
        <li className="list-item-container">
            <h4>{name}</h4>
            <div className="locatie">
            <h3>Locatie</h3>
            <p>{loc}</p>
            </div>
            <a href={link}>Foto</a>
        </li>

    )
}

export default BridgeListItem