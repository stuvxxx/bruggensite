import React from 'react'
import Data from "../Data/data.json"
import CollectionItem from './CollectionItem'

function Collection(props) {

  const fullData = Data.Bruggen
  const collection = props.collection
  console.log(collection)
  console.log(fullData)


  return (
    <div>
        <div className="bridge-list-container">  
            {fullData.map((x) => {
                return(
              <CollectionItem
                name={x.Naam} 
              />)  
            })}
        </div>
    </div>
  )
}

export default Collection