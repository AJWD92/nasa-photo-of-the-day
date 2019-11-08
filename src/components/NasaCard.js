import React from 'react';
import { Card, CardImg, CardText, CardTitle } from 'reactstrap';


const NasaCard = props => {
    return (
        <Card style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '600px', height: '650px', margin: '0 auto', position: 'relative' }}>
            <CardImg alt='nasa' src={props.url} style={{ maxWidth: '250px', maxHeight: '250px', }} />
            <CardTitle>Photo of: {props.title}</CardTitle>
            <CardText>Date taken: {props.date}</CardText>
            <CardText>Explanation: {props.explanation}</CardText>
        </Card>
    )
}

export default NasaCard;