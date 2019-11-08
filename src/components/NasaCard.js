import React from 'react';
import { Card, CardImg, CardText, CardTitle } from 'reactstrap';
import Cosmic1 from '../assets/Cosmic3.jpeg';

const NasaCard = props => {
    return (
        <Card style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '600px', height: '750px', margin: '0 auto', position: 'relative', backgroundImage: `url(${Cosmic1})`,backgroundSize: 'cover', border: '4px solid #663399'}}>
            <CardImg alt='nasa' src={props.url} style={{ maxWidth: '250px', maxHeight: '250px', marginBottom: '2%', border: '2px solid #000' }} />
            <CardTitle style={{color: '#f5f5f5'}}>Photo of: {props.title}</CardTitle>
            <CardText style={{color: '#f5f5f5'}}>Date taken: {props.date}</CardText>
            <CardText style={{color: '#f5f5f5'}}>Explanation: {props.explanation}</CardText>
        </Card>
    )
}

export default NasaCard;