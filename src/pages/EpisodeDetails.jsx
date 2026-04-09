import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react";
import SimpsonApi from "../services/SimpsonAPI";

const EpisodeDetails = () => {
  const { id } = useParams()
  const { getSingleEpisode } = SimpsonApi
  const [episode, setEpisode] = useState({});
  const image = 'https://cdn.thesimpsonsapi.com/500' + episode.image_path

  useEffect(() => {
    getSingleEpisode(id).then(data => setEpisode(data))
  }, [])



  if (!episode) return <div className="container mt-5 text-center"><h3>Cargando episodio...</h3></div>

  return (
    <div className="container mt-5 pb-5">
      <Link to="/" className="btn btn-secondary mb-4">
        <i className="fas fa-arrow-left me-2"></i>Volver
      </Link>

      <div className="row bg-white border rounded shadow-sm overflow-hidden">

{/* d-flex align-items-center justify-content-center */}
        <div className="col-lg-12 col-md-12 col-sm-12 p-0  d-flex align-items-center justify-content-center episode-details-img">
          <img
            src={image}
            className="w-100 d-block "
            alt={episode.name}
            style={{ maxHeight: "450px", maxWidth:"1000px",display: "block", objectFit:"initial" }}
          />
        </div>


        <div className="col-lg-12 col-md-12 col-sm-12 p-5 d-flex flex-column justify-content-center">
          <h1 className="display-3 fw-bold text-uppercase mb-2 text-center">{episode.name}</h1>


          <div className="row border-top pt-4">
            <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
              <h6 className="text-warning text-uppercase fw-bold">Sinopsis</h6>
              <p className="fs-5">{episode.synopsis || "Unknown"}</p>
            </div>


          </div>
        </div>
      </div>


    </div>
  );
};

export default EpisodeDetails;