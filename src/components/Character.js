import React from 'react'
import './Character.css'

export default function Character({ image, name, specie }) {

    return (
        <div className="character-container">
            <h2>{name}</h2>
            <h3>{specie}</h3>
            <img src={image} alt="" />
        </div>
    )
}