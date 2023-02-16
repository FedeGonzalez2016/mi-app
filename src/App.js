import "./App.css";
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal"></div>
        <div className="container">
          <h1> ♢ ♢ ♢ <span className="parpadear-titulo">Bienvenidos</span> ♢ ♢ ♢ </h1>
        </div>
          <h2><span className="parpadear"> ♢ ♢ ♢ &nbsp;</span>  Mis Proyectos <span className="parpadear">&nbsp;♢ ♢ ♢</span> </h2>
            <Testimonio
              proyecto= "'Hotel California'"
              tecnologias= "Bootstrap,Javascript,Python y Flask"
              resumen= "Tesis de la Carrera 'Técnico Superior en Desarrollo Web y Aplicaciones digitales' del Instituto Superior Politécnico de Córdoba."
              imagen = "Hotel-california"
              link = "https://hcalifornia.innovacionit.tech/"
            />
            <Testimonio
              proyecto= "'Innovación IT'"
              tecnologias= "Wordpress y Elementor"
              resumen= "Página Web realizada para simular empresa de tecnología para proyecto académico de la Carrera 'Técnico Superior en Desarrollo Web y Aplicaciones digitales'."
              imagen = "Innovacion-it"
              link = "https://innovacionit.tech/"
            />
            <Testimonio
              proyecto= "'Mi Primer Portafolio'"
              tecnologias= "Html,Css y Javascript"
              resumen= "Primer Portafolio para exposición de los trabajos realizados."
              imagen = "Portafolio-1"
              link = "https://portafoliofg.netlify.app/"
            />
            <Testimonio
              proyecto= "'Encriptador'"
              tecnologias= "Html,Css y Javascript"
              resumen= "Página Web Encriptador - Desencriptador de Texto creado como desafío del programa ONE NEXT GENERATION (ALURA LATAM - ORACLE)."
              imagen = "Encriptador"
              link = "https://encriptador-desafio.netlify.app/"
            />
            <Testimonio
              proyecto= "'Sistema Medicina Privada'"
              tecnologias= "Bootstrap,Mysql y PHP"
              resumen= "Base de datos y programa de una clínica, creado para gestionar información de los pacientes de la misma."
              imagen = "Crud-medicina-privada"
              link = "https://github.com/FedeGonzalez2016/CRUD/tree/master"
            />
    </div>
  );
}

export default App;
