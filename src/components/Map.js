import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';

class Map extends React.Component {
  render() {
    return (

      <Card style={{ width: '40rem', textAlign: 'center' }} >
        <Card.Header>City Information</Card.Header>
        <ListGroup >
          <ListGroup.Item variant="info">
            <p>City Name : {this.props.displayName}</p>
            <p>Longitude : {this.props.longitude}</p>
            <p>Latitude : {this.props.latitude}</p>
            <Card.Img src={this.props.imgURL}/>
          </ListGroup.Item>
        </ListGroup>
      </Card> 
    );
  }
}

export default Map;

      {/* <Card.Body > 


           <Card.Title >{this.props.displayName}</Card.Title>
          <Card.Text>
            Longitude: {this.props.longitude}
          </Card.Text>
          <Card.Text>
            Latitude: {this.props.latitude}
          </Card.Text>
          <Card.Img src={this.props.imgURL} />
        </Card.Body> */}