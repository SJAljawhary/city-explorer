import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';

class Movies extends React.Component {
    render() {
        return (

            <Card style={{ width: '40rem' }}>
                <Card.Header>Movies</Card.Header>
                <Card.Body>
                    {this.props.movieInformation.map((value, index) =>
                        <ListGroup key={index}>
                            <ListGroup.Item variant="info">

                                <p>Movie Title : {value.title}</p>

                                <p>The Overview : {value.overview}</p>

                                <p>Average votes: {value.average_votes}</p>

                                <p>Total votes : {value.total_votes}</p>

                                <Card.Img src={value.image_url} />

                                <p>Popularity : {value.popularity}</p>

                                <p>Released on : {value.released_on}</p>

                            </ListGroup.Item>
                        </ListGroup>
                    )}
                </Card.Body>
            </Card>

        );
    }
}

export default Movies;