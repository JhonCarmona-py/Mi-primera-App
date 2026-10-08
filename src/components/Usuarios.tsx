import { useState, useEffect } from "react";

type Usuario = {
 id: number;
 name: string;
 email: string;

};

function Usuarios(){
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

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
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>{usuario.name}: {usuario.email}</li>
                ))}
            </ul>
        </section>
    );
}
export default Usuarios;