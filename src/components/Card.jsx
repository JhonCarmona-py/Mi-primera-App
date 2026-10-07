import {useState} from "react";

function Card({nombre,descripcion, button, info}){
    const [estado, setEstado] = useState(false);
    
    return(
        <article>
            <h2>{nombre}</h2>

            <p>{descripcion}</p>

            {estado && (<p>{info}</p>)}

            <button onClick={() => setEstado(!estado)}> ver 
                {estado ? " menos" : " mas"}
            </button>

        </article>);
}
export default Card;
