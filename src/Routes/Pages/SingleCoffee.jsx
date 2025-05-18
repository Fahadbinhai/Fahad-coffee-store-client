import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const SingleCoffee = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, price, photo } = coffee;


    const handleDelete = (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`https://fahad-coffee-store-server.vercel.app/coffees/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })

                Swal.fire({
                    title: "Deleted!",
                    text: "This Coffee has been deleted.",
                    icon: "success"
                });

                // removing coffee from UI

                const coffeeAfterRemoving = coffees.filter((coff) => coff._id !== id);
                setCoffees(coffeeAfterRemoving);
            }
        });

    }


    return (
        <div className="card lg:card-side bg-amber-100 shadow-sm border-2">
            <figure className='p-5'>
                <img className='bg-base-100 rounded-xl'
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex gap-[250px] ml-10 items-center">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Price : {price} </p>
                    <p>Quantity : {quantity}  </p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join lg:join-vertical space-y-3">
                        <Link className="btn join-item"> <button>View</button> </Link>
                        <Link to={`/edit-coffee-details/${_id}`} className="btn join-item"> <button>Edit</button> </Link>
                        {/* <button className="btn join-item">Edit</button> */}
                        <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCoffee;