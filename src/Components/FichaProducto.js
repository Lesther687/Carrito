import React from 'react';
import { Modal, Button, Container, ModalHeader, ModalBody, ModalFooter, CardImg } from 'reactstrap';
import './FichaProducto.css';
import {listaCarrito} from '../listaCarrito.json';

class FichaProducto extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modal:false,
            listaCarrito,
            stock:this.props.props.stock,
        };
        this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
    }
    toggle(){
        this.setState(prevState =>({
            modal: !prevState.modal
        }));
    }
    agregarCarrito(){
        if(this.state.stock > 0){
            listaCarrito.push({
                "titulo": this.props.props.titulo,
                "precio": this.props.props.precio
            });
            this.setState(prev => ({
                stock: parseInt(prev.stock,10) - 1
            }));
        } else{
            alert("No hay stock disponble")
        }
        this.setState(prevState =>({
            modal: !prevState.modal
        }));
    }
    render(){
        return(
            <Container className="fichaPrduct">
                <Button onClick={this.toggle}>Ver Ficha</Button>
                <Modal isOpen = {this.state.modal}>
                    <ModalHeader>{this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}/>
                        <p>El detalle del producto es el siguiente: </p>
                        {this.props.props.descripcion}
                        <p>Este producto tiene un valor de <b>${this.props.props.precio}</b> pesos.</p>
                        <p>Hay <b>{this.state.stock}</b> unidades de este producto disponible</p>
                    </ModalBody>
                    <ModalFooter className="ModalFooter">
                        <Button color="primary" onClick={this.agregarCarrito}>Agregar al carrito</Button>
                        <Button color="secondary" onClick={this.toggle}>Volver atrás</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}
export default FichaProducto