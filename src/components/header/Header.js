import './Header.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {NavLink} from "react-router-dom";

const Header = () => {
 
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Container fluid>
                <Navbar.Brand className="nav-brand" href="/" >
                    Disney Movies
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0 nav-collapse" navbarScroll>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/TopList">Trending</NavLink>      
                    </Nav>
                    <Button variant="secondary" className="me-2">Login</Button>
                    <Button variant="secondary">Sign Up</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      )
    }
    
    export default Header