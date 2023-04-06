import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({ price }) => {
    return (
        <div className='bg-red-400 mt-4 p-4 rounded-md flex flex-col'>
            <p className='text-center '>
                <span className='text-2xl font-extrabold'>{price.price}</span>
                <span className='text-xl text-stone-50 '>/mon</span>
            </p>
            <p className='text-xl font-bold text-center my-6'>{price.name}</p>
            <h2 className='text-amber-400 underline text-xl font-medium'> Features:</h2>
            <div className='mb-4'>


                {
                    price.features.map((feature, idx) => <Feature
                        key={idx}
                        feature={feature}
                    ></Feature>)
                }
            </div>
            <button className='bg-red-500 hover:bg-slate-400  mt-auto w-full py-2
            '>Buy now</button>

        </div>
    );
};

export default PriceCart;