import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Phnbar = () => {
    const [phnes, setphnes] = useState([])
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        // .then(data=>console.log(data))
        axios.get(`https://openapi.programming-hero.com/api/phones?search=iphone`)
            .then(data => console.log(data))

    }, [])

    return (
        <div>

        </div>
    );
};

export default Phnbar;