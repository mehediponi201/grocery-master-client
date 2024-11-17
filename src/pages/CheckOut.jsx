import { useLoaderData } from "react-router-dom";
import checkout from '../assets/categories/checkout.jpg';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from 'sweetalert';

const CheckOut = () => {
    const service = useLoaderData();
    const{title,img,price,description} = service;
    const {user} = useContext(AuthContext);

    const handleOrder = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const password = form.password.value;

        const bookings = {
            customerName: name,
            email,
            password,
            date,
            user,
            title,
            img,
            price,
            description
        } 
        console.log(bookings); 
        form.reset();

        fetch('http://localhost:5000/bookings',{
            method:"post",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(bookings)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId)
            {
                swal("Successfully, order placed to cart");
            }
        })
        
    }

    return (
        <div>
            <h3 className="text-4xl text-center font-semibold mb-4">CheckOut Your Order</h3>
            <img className="w-full h-[300px]" src={checkout} alt="" />
            <h3 className="text-3xl text-center font-semibold mt-4 text-orange-500">Title: {title}</h3>
            <div className="card bg-base-100 w-full shadow-2xl mb-10">
                <form onSubmit={handleOrder}>
                    <div className="card-body grid grid-cols-1 lg:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-white font-semibold">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;