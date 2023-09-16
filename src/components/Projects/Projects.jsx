import { Card, Col, Row, Image } from "react-bootstrap";
import MuestreoApp from "../../assets/muestreoApp.jpg"
import "./Projects.css"
const Projects = () => {
    return (
        <div id="projects" className="mb-5">
            <Row className="mb-4 text-center"><h2 data-aos="fade-right" data-aos-duration="1500">Ultimos proyectos</h2></Row>
            <div>
                <p data-aos="fade-left" data-aos-duration="1500" className="col-6 m-auto text-center mb-3">En nuestra cartera, puede navegar por los últimos productos desarrollados para nuestros clientes para diferentes propósitos corporativos. Nuestro equipo calificado de diseñadores de interfaces y desarrolladores de software siempre está listo para crear algo único para usted.</p>
            </div>
            <h3 className="text-center" style={{ color: "#6689ff" }}>Sanidapp</h3>
            <Row className=" my-3 d-flex justify-content-around">
                <Image src={MuestreoApp} className="img-fluid col-4" />
                <Image src={MuestreoApp} className="img-fluid col-4" />
                <Image src={MuestreoApp} className="img-fluid col-4" />
            </Row>
            <Row className="my-3 d-flex justify-content-around">
                <Image src={MuestreoApp} className="img-fluid col-4" />
                <Image src={MuestreoApp} className="img-fluid col-4" />
                <Image src={MuestreoApp} className="img-fluid col-4" />
            </Row>
            {
                //Consultar si se necesita una barra como en la pagina, que despliegue los diferentes proyectos dependiendo de la especialidad
                //Debajo irian imagenes de Sanidapp
            }

        </div>
    )
}
export default Projects;