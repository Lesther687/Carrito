import React from 'react';
import { CardImg, Col, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './Producto.css';
import FichaProducto from './FichaProducto.js'

class Producto extends React.Component{
    render(){
        return(
            <Col sm="3">
                <Card className="Card" body outline color="primary">
                    <CardImg src={this.props.imagen}/>
                    <CardBody className="backColor">
                        <CardTitle className="backColor">{this.props.titulo}</CardTitle>
                        <CardSubtitle className="backColor">{this.props.subtitulo}</CardSubtitle>
                        <CardText className="backColor">
                            {this.props.texto}
                        </CardText>
                        <FichaProducto className="backColor" props={this.props}/>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}
export default Producto;