import React from 'react';
import { Table, Badge, Button, Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import {listaCarrito} from '../listaCarrito.json';

class Carro extends React.Component{
    constructor(){
        super();
        this.state={
            popoverOpen:false,
            listaCarrito
        };
        this.toggle= this.toggle.bind(this);
    }
    toggle(){
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }));
    }
    actualizarBadge(){
        return listaCarrito.length
    }
    render(){
        const arregloCarrito = this.state.listaCarrito.map(
            (listaCarrito, i) => {
                return (
                    <tr>
                        <td>{(i +=1)}</td>
                        <td>{listaCarrito.titulo}</td>
                        <td>{listaCarrito.precio}</td>
                    </tr>
                );
            }
        )
        function sumaTotal(){
            var suma = 0;
            for(let j = 0; j < listaCarrito.length; j++){
                suma = suma + parseInt(listaCarrito[j].precio,10)
            }
            suma = suma * 1000
            return <tr>
                <th>Total</th>
                <th></th>
                <th>$ {suma} CLP</th>
            </tr>
        }
        return(
            <div>
                <Button id="Popover1" color="info">
                <span class="material-icons">shopping_cart</span>
                <Badge id="numCarrito" color="secondary" >{this.actualizarBadge()}</Badge>
                </Button>
                <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverHeader>Listado de Compras</PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arregloCarrito}
                            </tbody>
                            <tfoot>
                            {sumaTotal()}
                            </tfoot>
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default Carro;