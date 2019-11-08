import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NasaCard from './NasaCard';
export default function NasaList() {
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [explanation, setExplanation] = useState('');

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=bSRxIeE2VdWzvLR5H9nhjfg4rVaLp9mH3wifm2ML").then(response => {
            console.log(response);
            setUrl(response.data.url);
            setTitle(response.data.title);
            setDate(response.data.date);
            setExplanation(response.data.explanation);
        })
            .catch(error => {
                console.log('Sorry no transmission from houston', error);
            })
    }, [])
    return (
        <div>
            <NasaCard url={url} title={title} date={date} explanation={explanation} />
        </div>
    )
}