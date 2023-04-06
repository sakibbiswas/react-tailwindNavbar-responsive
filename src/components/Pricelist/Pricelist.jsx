import React, { useEffect, useState } from 'react';
import PriceCart from '../pricecart/PriceCart';

const Pricelist = () => {
    const [prices, setprices] = useState([])
    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setprices(data))
    }, [])
    return (
        <div className='mx-12'>
            <h2 className='text-center text-3xl text-red-500 bg-red-300 p-4 mt-3'>My awesome pricelist</h2>
            <div className="grid md:grid-cols-3 gap-3">
                {
                    prices.map(price => <PriceCart
                        key={price.id}
                        price={price}></PriceCart>)
                }


            </div>
        </div>
    );
};

export default Pricelist;