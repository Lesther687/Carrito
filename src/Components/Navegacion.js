import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';
import Carro from './Carro';
import './Navegacion.css';

class Navegacion extends React.Component{
    render(){
        return(
            <Navbar className="Navegacion" color="light" light expand="md">
                <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Carro/>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
export default Navegacion;