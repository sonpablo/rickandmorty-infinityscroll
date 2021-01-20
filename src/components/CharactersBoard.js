import React, { useEffect, useState } from 'react';
import getCharacters from 'services/getCharacters';
import Character from 'components/Character'
import './Board.css'

export default function CharactersBoard() {

    const [state, setState] = useState([])

    useEffect(() => {
        getCharacters()
            .then(response => {
                setState(response)
            })
    }, [])

    const renderCharacters = () => {
        return state.map(item =>
            <Character image={item.image}
                key={item.id}
                name={item.name}
                specie={item.species} />
        )
    }

    return (
        <section className="board-container">
            {renderCharacters()}
        </section>
    )
}