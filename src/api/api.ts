const API_KEY = 'g0BfnB3XSuvWmc1TE7vUzDAaBxGWc9jy'

export const getGifs = async (search: string) => {
    const response = fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=50&offset=0&rating=G&lang=en`)
    return (await response).json()
}