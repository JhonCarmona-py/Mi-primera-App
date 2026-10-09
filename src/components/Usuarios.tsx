import { useState, useEffect } from "react";

type Usuario = {
 id: number;
 name: string;
 email: string;

};

function Usuarios(){
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [estado, setEstado] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsuarios(data))
            .catch((error) => console.error("Error al obtener los usuarios:", error));
    }, []);

    return(
        <section>
            <h2>Usuarios</h2>
            <ul>
                {estado && (<p>{usuarios.map((usuario) => (
                    <p key={usuario.id}>{usuario.name}: {usuario.email}</p>
                ))}</p>)}
            </ul>
            <button className="tarjeta-boton" onClick={() => setEstado(!estado)}>
                {estado ? " ocultar" : " mostrar"} usuarios
            </button>
        </section>
    );
}
export default Usuarios;