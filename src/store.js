export const initialStore = () => {
  return {
    characters: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  

  switch (action.type) {
    case 'set_characters':
      return {
        ...store,
        characters: action.payload || [] 
      };

    case 'add_favorite':
      
      if (store.favorites.find(fav => fav._id === action.payload._id)) return store;
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };

    case 'remove_favorite':
      return {
        ...store,
        favorites: store.favorites.filter(fav => fav._id !== action.payload._id)
      };

    default:
      return store;
  }
}
