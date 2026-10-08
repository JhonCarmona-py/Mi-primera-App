import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Formulario from "./components/Formularios";
import Usuarios from "./components/Usuarios";


function App(){
  const info = [{
      nombre :"diseño web",
      descripcion:"diseño moderno y atractivo",
      info:"diseños personalizados con IA a 15% de descuento",
    },
     
     {
      nombre :"desarrollo de software",
      descripcion:"desarrollos de software a medida",
      info:"desarrollos de software a medida para tu negocio",
     },
      {
      nombre:"Marketing digital",
      descripcion:"estrategias de marketing efectivas",
      info:"estrategias de marketing efectivas para tu negocio"
}]

return(
  <div>   
    <h1>
      Mi pagina web
    </h1>
    <Navbar/>
    
    <Hero/>
    <Formulario/>
    <Usuarios/>
   <section>
        {info.map((info) => (
          <Card
            key={info.nombre}
            nombre={info.nombre}
            descripcion={info.descripcion}
            info={info.info}
          />
        ))}
      </section>
    
    <Footer/>
 
    <p>&copy;derechos reservados 2026</p>
  </div>
);
}
export default App;