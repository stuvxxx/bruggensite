import React from 'react'
import Data from "../Data/data.json"
import CollectionItem from './CollectionItem'
import EmptyCollectionItem from './EmptyCollectionItem'

function Collection(props) {
  const fullData = Data.Bruggen
  const collection = props.collection

  for (let x = 0; x < collection.length; x++) {
    fullData[collection[x].id] = collection[x]
  }
  

  return (
    <div>
        <div className="bridge-list-container">  
            {fullData.map((x) => {
              if(!x.beauty) 
                return(
              <EmptyCollectionItem
                name={x.Naam} 
                collection={collection}
              />)
              else {
                return (
              <CollectionItem
                name={x.Naam}
                onClick={props.handleSee}
                index={collection.indexOf(x)}
                seen={x.isSeen}
                beauty={x.beauty}
                chill={x.chill}
                uitzicht={x.memory}
                comment={x.comment}
                />
                )
              }  
            })}
        </div>
    </div>
  )
}

export default Collection