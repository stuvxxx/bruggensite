import React from "react";

function BridgeListItem({name, loc, link}) {
    return (
        <div className="list-item-container">
            <h3>{name}</h3>
            <div className="locatie">
            <p>{loc}</p>
            </div>
            <a href={link}>Foto</a>
        </div>

    )
}

export default BridgeListItem