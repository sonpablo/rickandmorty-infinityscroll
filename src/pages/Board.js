import ListOfCharacters from 'components/ListOfCharacters';
import Spinner from 'components/Spinner';
import useCharacters from 'hooks/useCharacters';
import useNearBottonScreen from 'hooks/useNearBottonScreen'
import React, { useCallback, useRef, useEffect } from 'react'
import debounce from 'just-debounce-it'
import './Board.css'

export default function Board() {

    const { characters, searching, page, setPage } = useCharacters()

    const externalRef = useRef()

    const { isNearScreen } = useNearBottonScreen({
        externalRef: searching ? null : externalRef,
        once: false
    })

    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(currentPage => currentPage + 1), 200
    ), [setPage])

    useEffect(() => {
        if (isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])


    if (searching) return <Spinner />

    return (
        <>
            <h1 className="board-title">Infinity Scrill</h1>
            <ListOfCharacters characters={characters} />
            <section className="board-footer" id='observable' ref={externalRef}>
                <Spinner />
            </section>
        </>
    )
}