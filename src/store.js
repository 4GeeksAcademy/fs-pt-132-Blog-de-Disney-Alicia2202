export const initialStore = () => {
  return {
    characters: [],
    favorites: [],
    episodes: [],
    locations: []
  }
}

export default function storeReducer(store, action = {}) {
  

  switch (action.type) {
    case 'setCharacters':
      return {
        ...store,
        characters: action.payload || [] 
      };

    case 'addFavorite':
      
      if (store.favorites.find(fav => fav.id === action.payload.id && fav.type === action.payload.type)) return store;
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };

    case 'removeFavorite':
      return {
        ...store,
        favorites: store.favorites.filter(fav => !(fav.id === action.payload.id && fav.type === action.payload.type))
      };

    case 'setEpisodes':
      return {
      ...store, 
      episodes: action.payload
      }

    case 'setLocations':
      return{
        ...store,
        locations: action.payload
      }

    default:
      return store;
  }
}
