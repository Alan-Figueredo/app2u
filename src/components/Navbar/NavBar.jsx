import React, { useRef, useState } from 'react';
import { Navbar } from "react-bootstrap"
import "./NavBar.css"
import Logo from "../../assets/logo2.png"
const NavBar = () => {
  const [ubicacionPrincipal, setUbicacionPrincipal] = useState(window.scrollY);
  const [desplazamiento_Actual, setDesplazamiento_Actual] = useState(0);
  const [AbrirCerrar, setAbrirCerrar] = useState(false);
  const DivNav = useRef();
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const tab1ClassName = activeTab === 1 ? 'nav-link' : '';
  const tab2ClassName = activeTab === 2 ? 'nav-link' : '';
  const tab3ClassName = activeTab === 3 ? 'nav-link' : '';
  const tab4ClassName = activeTab === 3 ? 'nav-link' : '';

  window.onscroll = function () {
    setDesplazamiento_Actual(window.scrollY)
    setUbicacionPrincipal(desplazamiento_Actual);
  }

  if (ubicacionPrincipal >= desplazamiento_Actual) {
    DivNav.current?.classList.remove("abrir-Nav")
    DivNav.current?.classList.add("cerrar-Nav")
  } else if (desplazamiento_Actual >= ubicacionPrincipal) {
    DivNav.current?.classList.remove("cerrar-Nav")
    DivNav.current?.classList.add("abrir-Nav")
  }

  function handleClick() {
    setAbrirCerrar(!AbrirCerrar)
    handleCross()
  }

  if (window.innerWidth <= 1010) {
    return (
      <div className="bg-white py-sm-1 py-2" id="DivNav" ref={DivNav}>
        <Navbar>
          <button className="hamburger col-1" id="hamburger" title='menú hamburguesa' onClick={handleClick}></button>
          <img src={Logo} alt='LOGO APP2U' style={{ height: "auto", width: "21%" }} />
        </Navbar>
      </div>
    )
  } else {
    return (
      <div className="bg-white shadow-sm" id="DivNav" ref={DivNav}>
        <Navbar className="d-flex flex-row w-100">
          <img src={Logo} alt='LOGO APP2U' style={{ height: "2.5rem", width: "8%" }} className="ms-4 " />
          <ul className={`nav nav-ul col ${AbrirCerrar}`} id="ListaNav">
            <a href='#' onClick={() => handleTabClick(1)} className={tab1ClassName}>Home</a>
            <a href='#projects' onClick={() => handleTabClick(2)} className={tab2ClassName}>Proyectos</a>
            <a href='#equipo' onClick={() => handleTabClick(3)} className={tab3ClassName}>Equipo</a>
            <a href='#contacto' onClick={() => handleTabClick(4)} className={tab4ClassName}>Contacto</a>
          </ul>
        </Navbar>
      </div>
    )
  }

}
export default NavBar;  