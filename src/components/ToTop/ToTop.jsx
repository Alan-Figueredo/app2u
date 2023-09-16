import { BiUpArrowAlt } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import "./ToTop.css";

const ToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Función para manejar el desplazamiento y mostrar/ocultar el botón
    const handleScroll = () => {
        const scrollY = document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const halfPage = windowHeight;
        // console.log("scroll" + scrollY)
        // console.log("half" + halfPage)

        if (scrollY >= halfPage) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div data-aos="fade-down" data-aos-duration="3000" className={`button shadow-sm ${!isVisible && "hidden"}`} onClick={scrollToTop}>
            <BiUpArrowAlt style={{fontSize:"25px"}} />
        </div>
    );
};

export default ToTop;
