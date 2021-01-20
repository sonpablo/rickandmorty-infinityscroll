import React, { useEffect, useState } from 'react';
import getCharacters from 'services/getCharacters';
import Character from 'components/Character'
import Spinner from 'components/Spinner'
import './CharactersBoard.css'

export default function CharactersBoard() {

    const [state, setState] = useState([])

    useEffect(() => {
        getCharacters()
            .then(response => {
                setState(response)
            })
    }, [])

    const renderCharacters = () => {
        return (
            <section className="characters-container">
                {state.map(item =>
                    <Character image={item.image}
                        key={item.id}
                        name={item.name}
                        specie={item.species} />
                )}
            </section>)
    }

    return (
        <div className="board-container">
            {renderCharacters()}
            <Spinner />
            <p>hola</p>
        </div>
    )
}