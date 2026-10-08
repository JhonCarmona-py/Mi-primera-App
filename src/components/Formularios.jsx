import { useState } from "react";
import {formEvent} from "react";
function Formulario(){
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
function registro(e){
    e.preventDefault();
    alert("Registro exitoso");}
        return(
        <section>
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
            
                <button type="submit">Registrarse</button>
            </form>
        </section>
        )}


export default Formulario;