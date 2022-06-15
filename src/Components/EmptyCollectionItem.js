import React from "react";

function EmptyCollectionItem(props) {
    return (
            <div key={props.key} className="empty-card">
                <div className="inner-empty-card">
                    <p>{props.name}</p>
                </div>
            </div>
    )
}

export default EmptyCollectionItem