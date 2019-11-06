import React from 'react';

const NasaCard = props => {
    return (
        <div className='photoOfTheDay'>
            <img className='photo' alt='nasa' src={props.url} />
            <h1>Photo of: {props.title}</h1>
            <p>Date taken: {props.date}</p>
            <p>Explanation: {props.explanation}</p>


        </div>
    )
}

export default NasaCard;