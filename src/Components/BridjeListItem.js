import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'



function BridgeListItem({name, loc, link, handleFlip, id, flipped}) {
    return (
        <div className="card" onClick={() => handleFlip(id, flipped)}>
            <div id={id} className="card__inner">
                <div className="card__face card__face--front">
                    <h2>{name}</h2>
                </div>
                <div className="card__face card__face--back">
                    <div className="card__content">
                        <div className="card__header">
                            <h1>{name}</h1>
                        </div>
                        <div className="card__body">
                            <h3>Waar?</h3>
                            <p>{loc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BridgeListItem