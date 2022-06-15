import React from 'react'
import Data from "../Data/data.json"
import CollectionItem from './CollectionItem'
import EmptyCollectionItem from './EmptyCollectionItem'

function Collection(props) {

  const fullData = Data.Bruggen
  const collection = props.collection
  console.log(collection)
  console.log(fullData)

  for (let x = 0; x < collection.length; x++) {
    fullData[collection[x].id] = collection[x]
  }

  console.log(fullData)
  

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
              <CollectionItem/>
                )
              }  
            })}
        </div>
    </div>
  )
}

export default Collection