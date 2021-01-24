import React, { useEffect, useState } from 'react'
import getCharacters from 'services/getCharacters'

const INITIAL_PAGE = 1

export default function useCharacters() {

    const [characters, setCharacters] = useState([])
    const [searching, setSearching] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)

    useEffect(() => {
        setSearching(true)
        console.log(page)
        getCharacters(page)
            .then(response => {
                setCharacters(prevCharacters => prevCharacters.concat(response))
            })
            .finally(
                setSearching(false)
            )
    }, [page])

    return { characters, searching, setPage }
}