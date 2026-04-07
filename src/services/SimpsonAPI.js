const SimpsonApi = {}
const url = 'https://thesimpsonsapi.com/api'

SimpsonApi.getCharacters = async (limit = 20) => {
    try {
        const resp = await fetch (url + "/characters?limit=" + limit);
        if (!resp.ok) throw new Error ('Error getting characters')
        
        const data = await resp.json();
        console.log("Respuesta completa de la API:", data)
        return data;
        
    } catch (error) {
        console.error("Error cargando personajes:", error);
        return {docs:[]};
    }
}

SimpsonApi.getSingleCharacter = async (id) => {
    try {
        const resp = await fetch (url + "/characters/" + id);
        if (!resp.ok) throw new Error ('Error gettin character');
        const data = await resp.json();
        return data
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default SimpsonApi;