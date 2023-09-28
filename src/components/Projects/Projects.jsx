import { Card, Col, Row, Image } from "react-bootstrap";
import screen1 from "../../assets/1.webp"
import screen2 from "../../assets/2.webp"
import screen3 from "../../assets/3.webp"
import screen4 from "../../assets/4.webp"
import screen5 from "../../assets/5.webp"
import screen6 from "../../assets/6.webp"

import "./Projects.css"
const Projects = () => {
    return (
        <div id="projects" className="mb-5">
            <Row className="mb-4 text-center"><h2 data-aos="fade-right" data-aos-duration="1500">Ultimos proyectos</h2></Row>
            <div>
                <p data-aos="fade-left" data-aos-duration="1500" className="col-lg-6 col-10 m-auto text-center mb-3">En nuestra cartera, puede navegar por los últimos productos desarrollados para nuestros clientes para diferentes propósitos corporativos. Nuestro equipo calificado de diseñadores de interfaces y desarrolladores de software siempre está listo para crear algo único para usted.</p>
            </div>
            <h3 className="text-center" style={{ color: "#6689ff" }}>Sanidapp</h3>
            <Row className=" my-3 d-flex justify-content-around">
                <Image src={screen1} className="img-fluid col-lg-4 col-10" />
                <Image src={screen2} className="img-fluid my-lg-0 my-3 col-lg-4 col-10" />
                <Image src={screen3} className="img-fluid col-lg-4 col-10" />
            </Row>
            <Row className="my-3 d-flex justify-content-around">
                <Image src={screen4} className="img-fluid col-lg-4 col-10" />
                <Image src={screen5} className="img-fluid my-lg-0 my-3 col-lg-4 col-10" />
                <Image src={screen6} className="img-fluid col-lg-4 col-10" />
            </Row>
            {
                //Consultar si se necesita una barra como en la pagina, que despliegue los diferentes proyectos dependiendo de la especialidad
                //Debajo irian imagenes de Sanidapp
            }

        </div>
    )
}
export default Projects;