import ListOfCharacters from 'components/ListOfCharacters';
import Spinner from 'components/Spinner';
import useCharacters from 'hooks/useCharacters';
import React from 'react';
import './Board.css'

export default function Board() {

    const { characters, searching, page, setPage } = useCharacters()

    if (searching) return <Spinner />


    const handleNextPage = () => {
        setPage(currentPage => currentPage + 1)
    }

    return (
        <>
            <ListOfCharacters characters={characters} />
            <section className="board-footer">
                <Spinner />
                <br />
                <button onClick={handleNextPage}>Get next page</button>
            </section>
        </>
    )
}