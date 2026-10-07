function Card({nombre,descripcion, click}){
    function click(){
        alert("esta ingresando a la pagina de " + nombre)
    }
    return(
    <article>
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <button onClick={click}> ver mas
        </button>
    </article>)
}
export default Card;
