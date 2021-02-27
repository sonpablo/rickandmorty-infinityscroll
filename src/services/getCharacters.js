const API_RICKANDMORTY = window._env_.API_RICKANDMORTY;

export default function getCharacters({ page = 1 }) {

    const RESOURCE = `character/?page=${page}`
    const url = `${API_RICKANDMORTY}${RESOURCE}`

    return fetch(url)
        .then(response => {
            return response.json()
        })
        .then(response => {
            const { results } = response
            return results
        })

}