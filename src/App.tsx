import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Card from "./components/Card";


function App(){

return(
  <div>
    <Navbar/>
    <Hero/>
    <section>
      <Card
      nombre="diseño web"
      descripcion="diseño moderno y atractivo"
      />
      <Card
      nombre ="diseño web"
      descripcion="diseño moderno y atractivo"
      />
      <Card
      nombre="diseño web"
      descripcion="diseño moderno y atractivo"
      />
    </section>
    <Footer/>
    <h1>
      Mi primera aplicacion con react
    </h1>
    <p>Estoy aprendiendo react desde 0</p>
  </div>
);
}
export default App;