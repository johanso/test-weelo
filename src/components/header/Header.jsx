import React from 'react'
import { Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
import logo from '../../assets/images/logo.svg';
// Styles
import './Header.scss'

const Header = () => {
   return (
      <header className="header">
         <Navbar bg="bg-transparent" expand="lg" variant="dark" >
            <div className="container">

               <Navbar.Brand href="#home">
                  <img className="header__logo" src={logo} alt="logo" />
               </Navbar.Brand>

               <div className="header__navbar">
                  <Navbar.Toggle aria-controls="navBarControls" />
                  <Navbar.Collapse id="navBarControls">
                     <Nav className="header__navbar-menu">
                        <NavDropdown title="Our services" className="mr-3 text-white">
                           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">About</Nav.Link>
                     </Nav>
                     <div className="header__navbar-user d-flex">
                        <Nav.Link href="#link" className="text-white">Sign In</Nav.Link>
                        <Button className="button button-rounded" variant="none" type="button">
                           Get the App <i className="fa fa-cloud-download small" aria-hidden="true"></i>
                        </Button>
                     </div>
                  </Navbar.Collapse>
               </div>
            </div>
         </Navbar>
      </header>
   )
}

export default Header
