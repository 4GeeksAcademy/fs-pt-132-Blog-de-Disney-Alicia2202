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
        characters: action.payload
      };


    case 'add_favorite':
      const existFavourite = store.favourites.find(fav => fav._id === action.payload._id)
      
        if(existFavourite) {
          return store
        }
        return {
          ...store,
          favourites:[ ...store.favourites, action.paylod]

        }
  default:
      return store;
      }
  }
