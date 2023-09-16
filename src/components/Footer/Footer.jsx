import { Col, Row } from "react-bootstrap";
import { BsLinkedin, BsInstagram } from "react-icons/bs"
import "./Footer.css"
const Footer = () => {

    return (
        <div id="footer">
            <hr className="col-11" />
            <Row className="w-100">
                <Col lg={4} className="text-start ps-4">
                    <p>©APP2U 2023</p>
                </Col>
                <Col lg={4} className="justify-content-center d-flex">
                    <BsLinkedin className="iconSocialMedia" />
                    <BsInstagram className="iconSocialMedia" />
                </Col>
                <Col lg={4} className="text-end pe-4">
                    <p>Todos los derechos reservados</p>
                </Col>
            </Row>
        </div>
    )
}
export default Footer;