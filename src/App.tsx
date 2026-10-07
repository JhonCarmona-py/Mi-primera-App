import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Card from "./components/Card";


function App(){

return(
  <div>   
    <h1>
      Mi pagina web
    </h1>
    <Navbar/>
    
    <Hero/>
    <section>
      <Card
      nombre="diseño web"
      descripcion="diseño moderno y atractivo"
      info="diseños personalizados con IA a 15% de descuento"
      />
      <Card
      nombre ="desarrollo de software"
      descripcion="desarrollos de software a medida"
      info="desarrollos de software a medida para tu negocio"
      />
      <Card
      nombre="Marketing digital"
      descripcion="estrategias de marketing efectivas"
      info="estrategias de marketing efectivas para tu negocio"
      />
    </section>
    <Footer/>
 
    <p>&copy;derechos reservados 2026</p>
  </div>
);
}
export default App;