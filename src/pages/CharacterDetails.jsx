import { useParams,Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer";

const CharacterDetail = () => {
  const { id } = useParams()
  const {store} = useGlobalReducer();

  const character = store.characters.find(char => char._id === id);

  if (!character) return <div className="container mt-5">Cargando...</div>
  

  return (
    <div className="container mt-5">
      <Link to="/" className="btn btn-secondary mb-4">Home</Link>
      
      <div className="row align-items-center bg-light p-5 rounded shadow">
        <div className="col-md-4 text-center">
          
            <img
              src={character.image}
              className="img-fluid rounded"
              alt={character.name}
            />
          </div>
          <div className="col-md-8">
            
              <h1 className="display-4 fw-bold">{character.name}</h1>
                
              </div>
          </div>
        </div>
     
   
  );
};

export default CharacterDetail;
