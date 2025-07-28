import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

const FishDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1);
    const { user } = useContext(AuthContext);
    const Navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/fishes/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    // Redirect to login if the user is not logged in
    const handleAddToCart = () => {
        if (!user?.email) {
            Swal.fire("Please login before adding items into cart");
            Navigate("/login");
        }
    };


    return (
        <div className="flex justify-center mt-10">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={product.img} alt={product.title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.title}</h2>
                    <p>{product.description}</p>
                    <p className="font-bold">৳{product.price}</p>

                    <div className="flex items-center gap-3">
                        <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
                        <span>{qty}</span>
                        <button onClick={() => setQty(qty + 1)}>+</button>
                    </div>
                    {/* Redirect to login if the user is not logged in */}
                    {user?.email ? (
                        <Link to={`/checkout/${id}`}
                            state={{
                                title: product.title,
                                img: product.img,
                                price: product.price * qty,
                                qty: qty,
                                id
                            }}
                        >
                            <button className="btn btn-success mt-3 w-full">Add to Cart</button>
                        </Link>
                        // <button className="btn btn-success mt-3">Add to Cart</button>
                    ) : (
                        <button className="btn btn-outline btn-error" onClick={handleAddToCart}>
                            Login to Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FishDetails;