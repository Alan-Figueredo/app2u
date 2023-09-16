import { Button, Card, Col, Image, Row } from "react-bootstrap";
import "./Services.css"
import MobileDevelopment from "../../assets/mobileDevelopment.png"
import { PiHeadsetFill } from "react-icons/pi"
import { AiOutlineCloudUpload } from "react-icons/ai"
import { MdDeveloperMode } from "react-icons/md"


const Services = () => {
    return (
        <>
            <Row id="services" className="mb-5 w-100">
                <Col lg={7} sm={12}>
                    <Image src={MobileDevelopment} className="img-fluid" data-aos="fade-up" />
                </Col>
                <Col lg={5} sm={12}>
                    <Row className="my-2 gap-lg-3 justify-content-end">
                        <Card data-aos="fade-left" data-aos-duration="800" className="col-lg-5 col-10 shadow-sm" >
                            <h2 className="cardH2 col-12 text-center mt-5">¿Que ofrecemos?</h2>
                            <hr className="col-4 m-auto my-4" />
                            <Button className="mb-4 mx-2 ">Nuestros servicios</Button>
                        </Card>
                        <Card data-aos="fade-left" data-aos-duration="800" className="col-lg-5 col-10 shadow-sm" >
                            <div className="align-self-center mt-4">
                                <MdDeveloperMode className="iconService" />
                            </div>
                            <h3 className="cardH3 col-8 text-center m-auto">Soluciones corporativas</h3>
                            <hr className="col-4 m-auto my-3" />
                            <p className="cardP">Necesitas software especifico para tu compania? Nosotros lo desarrollamos!</p>
                        </Card>
                    </Row>
                    <Row className="my-2 gap-lg-3 justify-content-end">
                        <Card data-aos="fade-left" data-aos-duration="1000" className="col-lg-5 col-10 shadow-sm">
                            <div className="align-self-center mt-4">
                                <PiHeadsetFill className="iconService" />
                            </div>
                            <h3 className="cardH3 col-8 text-center m-auto">Productos para callcenter</h3>
                            <hr className="col-4 m-auto my-3" />
                            <p className="cardP">Nuestros expertos proporcionan productos personalizados para Callcenters.</p>
                        </Card>
                        <Card data-aos="fade-left" data-aos-duration="1000" className="col-lg-5 col-10 shadow-sm">
                            <div className="align-self-center mt-4">
                                <AiOutlineCloudUpload className="iconService" />
                            </div>
                            <h3 className="cardH3 col-8 text-center m-auto">Desarrollo en la nube</h3>
                            <hr className="col-4 m-auto my-3" />
                            <p className="cardP">También podemos ofrecerle soluciones confiables de desarrollo en la nube.</p>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default Services;