import React, { useEffect, useState } from 'react'
import getCharacters from 'services/getCharacters'

export default function useCharacters() {

    const [characters, setCharacters] = useState([])
    const [searching, setSearching] = useState(false)

    useEffect(() => {
        setSearching(true)
        getCharacters()
            .then(response => {
                setCharacters(response)
            })
            .finally(
                setSearching(false)
            )
    }, [])

    return { characters, searching }
}