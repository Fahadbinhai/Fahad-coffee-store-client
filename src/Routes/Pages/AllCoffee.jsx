import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleCoffee from './SingleCoffee';

const AllCoffee = () => {

    const allCoffee = useLoaderData();

    const [coffees, setCoffees] = useState(allCoffee)

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 my-10'>
            {
                coffees.map(coffee => <SingleCoffee key={coffee._id}
                     coffees={coffees}
                     setCoffees={setCoffees}
                     coffee={coffee}></SingleCoffee>)
            }
        </div>
    );
};

export default AllCoffee;