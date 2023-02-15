import React from "react";
import "../hojas-de-estilo/Testimonio.css"

function Testimonio(props){
  return (
    <div className="contenedor-proyecto">
      <img className="imagen-proyecto" src={require(`../imagenes/${props.imagen}.png`)} alt="Imagen 1"
      />
      <div className="contenedor-texto-proyecto">
        <p className="nombre-proyecto">Proyecto {props.proyecto}</p>
        <p className="tecnologias-proyecto">Realizado con {props.tecnologias}</p>
        <p className="texto-proyecto"> {props.resumen}</p>
        <a className="link-proyecto" href={props.link}>Ir al sitio</a>

      </div>
    </div>

  );
} export default Testimonio;