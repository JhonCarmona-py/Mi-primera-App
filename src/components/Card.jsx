import {useState} from "react";
import "./Card.css";


function Card({nombre,descripcion, info}){
    const [estado, setEstado] = useState(false);

    return(
        <article className="Tarjeta">
            <h2>{nombre}</h2>

            <p>{descripcion}</p>

            {estado && (<p>{info}</p>)}

            <button className="btn btn-success" onClick={() => setEstado(!estado)}> ver
                {estado ? " menos" : " mas"}
            </button>

        </article>
        );
    }

export default Card;