const { default: resolveRoutes } = require("./resolveRoutes")

const API = 'https://rickandmortyapi.com/api/character/'

const getData = async (id) => {
    const apiURL = id ? `${API + id}` : API

    return await fetch(apiURL)
        .then( res => res.json())
        .then( data => data )
        .catch( err => console.log('Fetch Err', err))
}

export default getData;