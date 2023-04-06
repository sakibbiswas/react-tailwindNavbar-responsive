import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({ feature }) => {
    return (
        <div className='flex items-center mt-3'>
            < CheckCircleIcon className="h-6 text-white w-6-500" />
            <span className='pl-3'>{feature}</span>

        </div>
    );
};

export default Feature;