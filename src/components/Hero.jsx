function Hero(){
     function click(){
        alert("bienvenido a la pagina de venta de organos frescos")
    }
    return(
    <section>
        <h1>
            Bienvenido a mi paginan web 
        </h1>

        <p>una interfaz utilizando react</p>

        <button className="btn btn-success" onClick={click}> comenzar
        </button>
    </section>
    );
}
export default Hero;