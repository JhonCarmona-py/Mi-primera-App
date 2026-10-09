import { useState } from "react";
import "./Formulario.css";
function Formulario(){
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      
function registro(e){
    e.preventDefault();
    alert("Registro exitoso");}
        return(
        <section className="tarjeta-formulario">
            <div className="tarjeta-formulario-header">
                <h2>Registro</h2>
                <form onSubmit={registro}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input 
                    type="text" 
                    id="nombre" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    minLength={3}
                    required 
                    />
                </form>
            
          
                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                />
            
                <label htmlFor="password">Contraseña:</label>
                <input 
                type="password" 
                id="password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                />
            </div>
                <button className="btn btn-success" type="submit">Registrarse</button>
           
        </section>
        )}


export default Formulario;