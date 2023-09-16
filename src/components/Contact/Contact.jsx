import { Form, Row, Button, Col, Card } from "react-bootstrap";
import { BsHouse } from "react-icons/bs"
import { LuMail, LuSmartphone } from "react-icons/lu"
import "./Contact.css"
const Contact = () => {
    return (
        <Col id="contacto" className="m-auto mb-5">
            <Row className="d-flex justify-content-between my-5">
                <Col className="m-auto" >
                    <Card className="align-items-center justify-content-center" style={{height:"314px"}}>
                        <LuSmartphone className="iconContact mb-3" />
                        <p>+1 323-913-4688</p>
                    </Card>
                </Col>
                <Col className="m-auto">
                    <Card className="align-items-center justify-content-center" style={{height:"314px"}}>
                        <BsHouse className="iconContact mb-3" />
                        <p >Málaga, España</p>
                    </Card>
                </Col>
                <Col >
                    <Card className="align-items-center justify-content-center" style={{height:"314px"}}>
                        <LuMail className="iconContact mb-3" />
                        <p >app2u@gmail.com</p>
                    </Card>
                </Col>
            </Row>
            <Row className="align-items-center d-flex justify-content-center">
                <h3 className="col-2 ps-3">Contactanos</h3>
                <p className="col">Si tienes alguna consulta, llena el formulario y te contestaremos a la brevedad.</p>
            </Row>
            <Form className="px-3">
                <Row className="gap-2 my-2">
                    <input className="col inputForm" type="text" placeholder="Tu nombre" />
                    <input className="col inputForm" type="email" placeholder="E-mail" />
                    <input className="col inputForm" type="phone" placeholder="Numero telefonico" />
                </Row>
                <Row>
                    <textarea className="inputForm" rows={7} placeholder="Mensaje" />
                </Row>
                <Button className="mt-4">Enviar mensaje</Button>
            </Form>
        </Col>
    )
}
export default Contact;