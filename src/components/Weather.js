import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';


class Weather extends React.Component {
    render() {
        return (

                <Card style={{ width: '40rem' , textAlign: 'center'}}>
                    <Card.Header>Weather Forcast </Card.Header>
                    <Card.Body>
                        {this.props.weatherInformation.map((value, index) => (
                            <ListGroup key={index}>
                                <ListGroup.Item variant="info">
                                 <p>Date : {value.date}</p>  
                                 <p>Description : {value.description}</p>   
                                 </ListGroup.Item>
                            </ListGroup>
                        ))}
                    </Card.Body>
                </Card>

                );
    }
  }

 export default Weather;


        

