import React, { useState } from 'react';
import './HamburgerArrowIcon.css'; // Asegúrate de tener el archivo CSS correspondiente
import { useSidebarContext } from '../../context/SidebarContext';

const HamburgerArrowIcon = () => {
    const { handleClose, isOpen, handleClick, show } = useSidebarContext();
    return (
        <div className={`icon ${isOpen && show ? 'open' : ''}`} onClick={() => { handleClick(); handleClose() }}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    );
};

export default HamburgerArrowIcon;
