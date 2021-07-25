
export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=${ yourApiKey }`;
    const resp = await fetch(url);
    const { data } = await resp.json(); // solo obtiene el arreglo data

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // EL signo (?) es para preguntar si viene la imagen
        }
    })

    return gifs;

}
