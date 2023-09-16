import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Image } from 'react-bootstrap';
import imagenCarrusel1 from "../../assets/imagen1Carrusel.jpg"
import "./Carousel.css"

const CarouselContainer = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index}  onSelect={handleSelect} className='mb-5 w-100' >
            <Carousel.Item interval={3000}>
                <Image className='imgCarousel' src={imagenCarrusel1}/>
                <Carousel.Caption>
                    <h3>Desarrollo de aplicaciones Mobile</h3>
                    <p>Desde nuestra creación, hemos estado entregando soluciones de software sostenibles y de alta calidad para fines corporativos.</p>
                    <Button><a href="#contacto" style={{ textDecoration: "none", color: "white" }}>Contactanos</a></Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <Image className='imgCarousel' src={imagenCarrusel1}/>
                <Carousel.Caption>
                    <h3>Equipo experimentado</h3>
                    <p>Somos un equipo de desarrolladores de software calificados, destinados a crear herramientas únicas y poderosas para su negocio y la vida cotidiana.</p>
                    <Button><a href="#equipo" style={{ textDecoration: "none", color: "white" }}>Conocenos</a></Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselContainer;