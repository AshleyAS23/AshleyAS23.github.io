import React from "react";
import "./about.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const About = () => {
  return (
    <div className="card_container">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="\src\imagenes\paletasombras.jpeg" />
      <Card.Body>
        <Card.Title>Paleta de Sombras Encanto Vintage</Card.Title>
        <Card.Text>
          Una exquisita selección de tonos vintage para crear looks únicos y elegantes.
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="\src\imagenes\ruborcrema.png" />
      <Card.Body>
        <Card.Title>Rubor en Crema Encanto Vintage</Card.Title>
        <Card.Text>
          Dale a tus mejillas un toque de color natural y radiante con nuestra fórmula en crema.
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="\src\imagenes\labiales.jpg" />
      <Card.Body>
        <Card.Title>Labial Mate     Encanto Vintage</Card.Title>
        <Card.Text>
          Consigue unos labios suaves y seductores con nuestra gama de colores clásicos y atemporales.
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  </div>
  
  );
};
export default About;
