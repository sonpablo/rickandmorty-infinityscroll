import ListOfCharacters from 'components/ListOfCharacters';
import React, { useEffect, useState } from 'react';
import useCharacters from 'hooks/useCharacters'
import Spinner from 'components/Spinner'

export default function Board() {

    const { characters, searching } = useCharacters()

    if (searching) return <Spinner />

    return (
        <ListOfCharacters characters={characters} />
    )
}