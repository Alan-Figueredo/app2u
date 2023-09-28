import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export const SidebarContext = createContext([]);

export const SidebarContextProvider = ({ children }) => {
    const [show, setShow] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const handleClose = () => setShow(!show);
    return (
        <SidebarContext.Provider value={{ handleClose, show, isOpen, handleClick }}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebarContext = () => useContext(SidebarContext);