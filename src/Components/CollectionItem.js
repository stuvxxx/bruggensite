import React from "react";

function CollectionItem(props) {
    return (
            <div className="empty-card">
                <div className="inner-empty-card">
                    <p>{props.name}</p>
                </div>
            </div>
    )
}

export default CollectionItem