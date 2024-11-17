import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import BookingsCart from "./BookingsCart";
import swal from 'sweetalert'

const BookingsPage = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])


    const handleDelete = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "Delete"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover this imaginary file!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                        .then((willDelete) => {
                            if (willDelete) {
                                swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
                                });
                            } else {
                                swal("Your imaginary file is safe!");
                            }
                        });
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
    }

    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "put",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    const currentBooking = [updated, ...remaining];
                    setBookings(currentBooking);
                }
            })
    }

    return (
        <div>
            <h4 className="text-center text-3xl mt-3 mb-3">Total Bookings: {bookings.length} items</h4>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Delete Product</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Due Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingsCart key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookingsCart>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default BookingsPage;