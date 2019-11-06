import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NasaCard from './NasaCard';
export default function NasaList() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=bSRxIeE2VdWzvLR5H9nhjfg4rVaLp9mH3wifm2ML").then(response => {
            console.log(response.data);
        })
            .catch(error => {
                console.log('Sorry no transmission from houston', error);
            })
    }, [])
    return (
        <div></div>
    )
}