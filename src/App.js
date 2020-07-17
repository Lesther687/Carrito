import React from 'react';
import './App.css';
import Producto from './Components/Producto';
import { Container, Row } from 'reactstrap';
import Navegacion from './Components/Navegacion';
import {listaProductos} from './ListaProducto.json'

class App extends React.Component {
  constructor(){
    super();

    this.state={
      listaProductos
    }
  }
  render(){
    const arregloComponentes = this.state.listaProductos.map(
      (listaProductos, i) => {
        return(
          <Producto
          key={i}
          titulo={listaProductos.titulo}
          imagen={listaProductos.imagen}
          descripcion={listaProductos.texto}
          precio={listaProductos.precio}
          stock={listaProductos.stock}
          />
        )
      }
    )
    return (
      <Container className="contenedor">
        <Navegacion titulo="Mi Primer sitio de compras!!"/>
        <Row className="productos">
          {arregloComponentes}
        </Row>
      </Container>
    );
  }
}

export default App;