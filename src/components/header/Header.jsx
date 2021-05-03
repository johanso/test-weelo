import React from 'react'
import { Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
// Images
import logo from '../../assets/images/logo.svg';
import logoWhite from '../../assets/images/logo-white.svg';
// Styles
import './Header.scss'

const Header = () => {
   return (
      <header className="header">
         <Navbar bg="bg-transparent" expand="md" variant="dark" >
            <div className="container">

               <Navbar.Brand href="#home">
                  <img className="header__logo d-none d-lg-block" src={logo} alt="logo" />
                  <img className="header__logo d-lg-none" src={logoWhite} alt="logo" />
               </Navbar.Brand>

               <Button className="button button-rounded d-md-none ml-auto mr-3" variant="none" type="button">
                  Get App <i className="fa fa-cloud-download small" aria-hidden="true"></i>
               </Button>

               <Navbar.Toggle aria-controls="navBarControls" />
               <Navbar.Collapse id="navBarControls">
                  <Nav className="header__menu">
                     <NavDropdown title="Our services" className="mr-3 text-white">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                     </NavDropdown>
                     <Nav.Link href="#link">About</Nav.Link>
                  </Nav>
                  <div className="header__user d-flex">
                     <Nav.Link href="#link" className="text-white px-0">Sign In</Nav.Link>
                     <Button className="button button-rounded d-none d-md-block ml-4" variant="none" type="button">
                        Get the App <i className="fa fa-cloud-download small" aria-hidden="true"></i>
                     </Button>
                  </div>
               </Navbar.Collapse>
            
            </div>
         </Navbar>
      </header>
   )
}

export default Header
