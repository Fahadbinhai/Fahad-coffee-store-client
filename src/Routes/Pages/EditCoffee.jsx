import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const EditCoffee = () => {

    const editData = useLoaderData();
    const { _id, name, quantity, supplier, taste, price, details, photo } = editData;

    const handleEditCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const price = form.price.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const editCoffeeData = { name, quantity, supplier, taste, price, details, photo }

        // console.log(editCoffeeData)

        // sending data to db

        fetch(`https://fahad-coffee-store-server.vercel.app/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editCoffeeData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log("After edit to database" , data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Coffee updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className='mx-[150px] mt-10 text-black font-bold text-xl'>
            <h2 className='text-center font-bold text-3xl my-14'>Edit Existing Coffee</h2>
            <form onSubmit={handleEditCoffee}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 '>

                    <fieldset className="fieldset bg-amber-100 border-blue-600 rounded-box border-2 p-4">
                        <label className='label'> (1) Name</label>
                        <input required type="text" name='name' defaultValue={name} className="input w-full" placeholder="Enter Coffee name" />
                    </fieldset>

                    <fieldset className="fieldset bg-amber-100 border-blue-600 rounded-box border-2 p-4">
                        <label className='label'>(2) Quantity</label>
                        <input required type="text" name='quantity' defaultValue={quantity} className="input w-full" placeholder="Quantity" />
                    </fieldset>

                    <fieldset className="fieldset bg-amber-100 border-blue-600 rounded-box border-2 p-4">
                        <label className='label'>(3) Supplier</label>
                        <input required type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="Supplier" />
                    </fieldset>

                    <fieldset className="fieldset bg-amber-100 border-blue-600 rounded-box border-2 p-4">
                        <label className='label'>(4) Taste</label>
                        <input required type="text" name='taste' defaultValue={taste} className="input w-full" placeholder="taste" />
                    </fieldset>

                    <fieldset className="fieldset bg-amber-100 border-blue-600 rounded-box border-2 p-4">
                        <label className='label'>(5) Price</label>
                        <input required type="number" name='price' defaultValue={price} className="input w-full" placeholder="Price" />
                    </fieldset>

                    <fieldset className="fieldset bg-amber-100 border-blue-600 rounded-box border-2 p-4">
                        <label className='label'>(6) Details</label>
                        <input required type="text" name='details' defaultValue={details} className="input w-full" placeholder="Details" />
                    </fieldset>
                </div>
                {/* photo url */}
                <fieldset className="fieldset bg-amber-100 border-blue-600 rounded-box border-2 p-4 mt-6">
                    <label className='label'>(6) Photo URL</label>
                    <input required type='text' name='photo' defaultValue={photo} className="input w-full" placeholder="Photo" />
                </fieldset>
                <input type="submit" className='btn w-full bg-amber-700 text-white mt-6' value="Submit" />
            </form>
        </div>
    );
};

export default EditCoffee;