function Hero(){
     function click(){
        alert("bienvenido a la pagina de venta de organos frescos")
    }
    return(
    <section>
        <h1>
            venta de organos frescos
        </h1>

        <p>50% de descuento</p>

        <button onClick={click}> comenzar
        </button>
    </section>
    );
}
export default Hero;