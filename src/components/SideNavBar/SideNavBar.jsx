import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSidebarContext } from '../../context/SidebarContext';
import "./SideNavBar.css"
function SideNavBar() {
    const { show, handleClose } = useSidebarContext();
    const [activeTab, setActiveTab] = useState("Home");
    const tabs2 = [{ name: "Home", link: "" }, { name: "Proyectos", link: "projects" }, { name: "Equipo", link: "equipo" }, { name: "Contacto", link: "contacto" }]
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <>
            <Offcanvas show={show} style={{ marginTop: "3rem" }}>
                <Offcanvas.Body>
                    {tabs2.map((tab) => {
                        return (
                            <a href={`#${tab.link}`} onClick={() => { handleTabClick(tab.name); handleClose() }} className={activeTab === tab.name ? 'active' : ''}>
                                {tab.name}
                            </a>
                        )
                    })
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SideNavBar;