import Character from 'components/Character';
import React from 'react';
import './ListOfCharacters.css';

export default function ListOfCharacters({ characters }) {

    const renderCharacters = () => {
        return (
            <section className="characters-container">
                {characters.map(item =>
                    <Character image={item.image}
                        key={item.id}
                        name={item.name}
                        specie={item.species} />
                )}
            </section>)
    }

    return (
        renderCharacters()
    )
}