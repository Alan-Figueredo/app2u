import { Col, Image, Row } from "react-bootstrap";
import equipo from "../../../equipo.json"
import "./Team.css"
const Team = () => {
    return (
        <>
            <Row className="w-100" data-aos="fade-right" data-aos-duration="1500" id="equipo"><h2 className="text-center my-5">Conoce al equipo</h2></Row>
            <Row className="w-100" data-aos="fade-left" data-aos-duration="1500">
                {equipo.map((mate, index) => {
                    return (
                        <Col style={{height:"350px"}} key={index} lg={3} className="col-12">
                            <Image className="imgTeam" src={mate.img ? mate.img : ""}  />
                            <div className="teamCaption">
                                <p style={{marginBottom:"5px"}}>{mate.name}</p>
                                <p style={{marginBottom:"5px"}}>{mate.position}</p>
                            </div>
                            {/* <p>{mate.name}</p>
                            <p>{mate.position}</p> */}
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}
export default Team;