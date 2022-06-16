import React from "react";

function CollectionItem(props) {
    return (
            <div className="empty-card">
                <div 
                id={props.name} 
                className={props.seen ? "collected-card-seen" : "collected-card-unseen"}
                onClick={() => props.onClick(props.name, props.index)}  
                >
                <div>
                    <h1>{props.name}</h1>
                    <p>Beauty: {props.beauty}</p>
                    <p>Chill: {props.chill}</p>
                    <p>Uitzicht: {props.uitzicht}</p>
                    <p>Comment: {props.comment}</p>
                </div> 
            </div>
            </div>

    )
}

export default CollectionItem