import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faXmarksLines, faRotate} from '@fortawesome/free-solid-svg-icons'



function BridgeListItem({name, loc, handleFlip, id, link}) {
    return (
        <div className="card">
            <div id={id} className="card__inner">
                <div className="card__face card__face--front">
                    <div className="card__content">
                    <div className="card__header">
                        <h1>{name}</h1>
                    </div>
                    <div className="card__body">
                        <p>{loc}</p>
                    </div>
                    <div className="logos">
                    <a href={link}>
                        <FontAwesomeIcon className="icon1" icon={faCamera}/>
                    </a>
                    <FontAwesomeIcon className="icon3" icon={faXmarksLines}/>
                    <FontAwesomeIcon onClick={() => handleFlip(id)} className="icon2" icon={faRotate}/>
                    </div>
                </div>
                </div>
                <div className="card__face card__face--back">
                    <div className="card__content">
                        <div className="card__header">
                            <h1>{name}</h1>
                        </div>
                        <div className="card__body">
                            <h2>Not rated</h2>
                            <p>Hold to add info and save into collection!</p>
                        </div>
                        <div className="logos">
                        <a href={link}>
                            <FontAwesomeIcon className="icon1" icon={faCamera}/>
                        </a>
                        <FontAwesomeIcon className="icon3" icon={faXmarksLines}/>
                        <FontAwesomeIcon onClick={() => handleFlip(id)} className="icon2" icon={faRotate}/>
                    </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default BridgeListItem