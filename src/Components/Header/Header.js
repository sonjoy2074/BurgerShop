import React from "react";
import { Navbar, Nav, NavItem,NavLink,NavbarBrand } from "reactstrap";
import "./Header.css";
import Logo from "../../assets/logo.png"
const Header = () => {
    return (
        <div className="navigation">
            <Navbar style={{
                backgroundColor:"#D70F64",
                height:"70px",

            }}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 brand">
                    <img src={Logo} alt="Logo" style={{width:"80px"}} />
                </NavbarBrand>
                <Nav className="me-md-5">
                    <NavItem>
                        <NavLink href="#" className="NavLink">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" className="NavLink">Tut no.9 start</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;