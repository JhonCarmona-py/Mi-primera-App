function Hero(){
     function click(){
        alert("bienvenido a la pagina de venta de organos frescos")
    }
    return(
    <section>
        <h1>
            Desarrollo web y marketing digital
        </h1>

        <p>una interfaz utilizando react</p>

        <button onClick={click}> comenzar
        </button>
    </section>
    );
}
export default Hero;