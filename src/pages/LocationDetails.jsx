import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react";
import SimpsonApi from "../services/SimpsonAPI";

const LocationDetails = () => {
    const { id } = useParams()
    const { getSingleLocation } = SimpsonApi
    const [location, setLocation] = useState({});
    const image = 'https://cdn.thesimpsonsapi.com/500' + location.image_path

    useEffect(() => {
        getSingleLocation(id).then(data => setLocation(data))
    }, [])



    if (!location) return <div className="container mt-5 text-center"><h3>Cargando ubicación...</h3></div>

    return (
        <div className="container mt-5 pb-5">
            <Link to="/" className="btn btn-secondary mb-4">
                <i className="fas fa-arrow-left me-2"></i>Volver
            </Link>

            <div className="row bg-white border rounded shadow-sm overflow-hidden">


                <div className="col-lg-12 col-md-12 col-sm-12 p-0  d-flex align-items-center justify-content-center episode-details-img">
                    <img
                        src={image}
                        className="w-100 d-block "
                        alt={location.name}
                        style={{ maxHeight: "450px", maxWidth: "1000px", display: "block", objectFit: "initial" }}
                    />
                </div>


                <div className="col-lg-12 col-md-12 col-sm-12 p-5 d-flex flex-column justify-content-center">
                    <h1 className="display-3 fw-bold text-uppercase mb-2 text-center">{location.name}</h1>


                    <div className="row border-top pt-4 d-flex justify-content-around">
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                            <h6 className="text-warning text-uppercase fw-bold">Ciudad</h6>
                            <p className="fs-5">{location.town || "Unknown"}</p>
                        </div>


                        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                            <h6 className="text-warning text-uppercase fw-bold">Uso</h6>
                            <p className="fs-5">{location.use || "Unknown"}</p>
                        </div>



                    </div>
                </div>


            </div>
        </div>
    );
};

export default LocationDetails;