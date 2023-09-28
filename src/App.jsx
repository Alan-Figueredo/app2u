import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from "aos"
import "aos/dist/aos.css"
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import Team from './components/Team/Team'
import { Container } from 'react-bootstrap';
import NavBar from "./components/Navbar/NavBar"
import { useEffect } from 'react';
import ToTop from './components/ToTop/ToTop';
import CarouselContainer from './components/Carousel/CarouselContainer';
import SideNavBar from './components/SideNavBar/SideNavBar';
import { SidebarContextProvider } from './context/SidebarContext';

function App() {
  useEffect(() => {
    Aos.init({
      once: true
    });
  }, [])

  return (
    <>
      <SidebarContextProvider>
        <NavBar />
        <SideNavBar />
        <CarouselContainer />
        <Container>
          <Services />
          <Projects />
          <Team />
          <Contact />
          <ToTop />
        </Container>
        <Footer />
      </SidebarContextProvider>
    </>
  )
}

export default App
