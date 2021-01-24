import Character from 'components/Character';
import Spinner from 'components/Spinner';
import React from 'react';
import './CharactersBoard.css';

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
        <div className="board-container">
            {renderCharacters()}
            <Spinner />
        </div>
    )
}