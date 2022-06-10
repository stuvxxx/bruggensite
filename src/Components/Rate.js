import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faXmarksLines, faRotate} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

function Rate(props) {


  const [chill, setChill] = useState("1")
  const [beauty, setBeauty] = useState("1")
  const [memory, setMemory] = useState("1")
  const [comment, setComment] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const rating = { chill, beauty, memory, comment }
    props.handleRate(rating)
}




    return (
      <div className="rate-container">
        <div className="rate-content">
            <div className="rate-header">
                <h1>{props.title}</h1>
            </div>
            <div className="rate-form-container">
              <form onSubmit={handleSubmit}>
                <div className='select-container'>
                  <label> Hoe chill is deze brug?
                <select
                  value={chill}
                  onChange={(e) => setChill(e.target.value)}
            > 
          <option>Click to add stars</option>
                <option value="★">★</option>
                <option value="★★">★★</option>
                <option value="★★★">★★★</option>
                <option value="★★★★">★★★★</option>
                <option value="★★★★★">★★★★★</option>
            </select>
            </label>
            </div>
            <div className='select-container'>
            <label> Hoe chill is deze brug?
            <select
            value={beauty}
            onChange={(e) => setBeauty(e.target.value)}
            >
          <option>Click to add stars</option>
                <option value="★">★</option>
                <option value="★★">★★</option>
                <option value="★★★">★★★</option>
                <option value="★★★★">★★★★</option>
                <option value="★★★★★">★★★★★</option>
            </select>
            </label>
            </div>
            <div className='select-container'>
            <label> Hoe chill is deze brug?
            <select
            value={memory}
            onChange={(e) => setMemory(e.target.value)}
            >
          <option>Click to add stars</option>
                <option value="★">★</option>
                <option value="★★">★★</option>
                <option value="★★★">★★★</option>
                <option value="★★★★">★★★★</option>
                <option value="★★★★★">★★★★★</option>
            </select>
            </label>
            </div>
            <div className='input-container'>
            <textarea 
                type="textarea"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Extra opmerking -- max 160 --"
                />
            </div>
            <div className='btn-container'>
              <button className="btn add">Voeg toe aan collectie</button>
              <button className="btn cancel">Annulée</button>
            </div>
            </form>

            </div>
        </div>
      </div>
    )
  }


export default Rate