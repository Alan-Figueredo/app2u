import { Col, Row } from "react-bootstrap";
import { BsLinkedin, BsInstagram } from "react-icons/bs"
import "./Footer.css"
const Footer = () => {

    return (
        <div id="footer">
            <hr className="col-11" />
            <Row className="w-100">
                <Col lg={4} className="text-lg-start text-center ps-lg-4 ps-0 col-12">
                    <p>©APP2U 2023</p>
                </Col>
                <Col lg={4} className="justify-content-center d-flex pb-lg-0 mb-l-0 mb-3  col-12">
                    <a href="https://acesse.one/otIcT" target="_blank"><BsLinkedin className="iconSocialMedia" /></a>
                    <a href="#"><BsInstagram className="iconSocialMedia" /></a>
                </Col>
                <Col lg={4} className="text-lg-end text-center pe-lg-4 pe-0 col-12">
                    <p>Todos los derechos reservados</p>
                </Col>
            </Row>
        </div>
    )
}
export default Footer;