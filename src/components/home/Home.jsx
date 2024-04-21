import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">¡Bienvenido a Encanto Vintage!</h1>
        <p className="lead">
          Descubre nuestra colección única de productos de maquillaje vintage
          que te transportarán a épocas pasadas.
        </p>
        <hr className="my-4" />
        <p>
          Encanto Vintage ofrece una selección cuidadosamente curada de
          maquillaje inspirado en la elegancia y el glamour de décadas
          anteriores.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Conoce más
        </a>
      </div>
    </div>
  );
};
export default Home;
