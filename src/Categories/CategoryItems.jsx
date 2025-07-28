import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CategoryItems = () => {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Decide API endpoint based on category name
        let endpoint = "";
        if (categoryName.toLowerCase() === "fish") {
            endpoint = `http://localhost:5000/fishes?category=${categoryName}`;
        } else if (categoryName.toLowerCase() === "grains") {
            endpoint = `http://localhost:5000/grains?category=${categoryName}`;
        }
        else if (categoryName.toLocaleLowerCase() === 'fruits') {
            endpoint = `http://localhost:5000/fruits?category=${categoryName}`
        }
        else if (categoryName.toLocaleLowerCase() === 'meat') {
            endpoint = `http://localhost:5000/beefs?category=${categoryName}`
        }
        else if (categoryName.toLocaleLowerCase() === 'vegetable') {
            endpoint = `http://localhost:5000/vegetable?category=${categoryName}`
        }
          else if (categoryName.toLocaleLowerCase() === 'chicken') {
            endpoint = `http://localhost:5000/chicken?category=${categoryName}`
        }
       
        if (endpoint) {
            fetch(endpoint)
                .then(res => res.json())
                .then(data => {
                    console.log("Fetched data:", data);
                    setProducts(data)
                });
        }
    }, [categoryName]);

    if (!products || products.length === 0) {
        return (
            <div>
                <span className="loading loading-spinner loading-xl"></span>
                <p className="text-center mt-10">No products found for {categoryName}.</p>
            </div>
        )
    }

    return (
        <div className="mt-10">
            <h2 className="text-3xl font-semibold text-center mb-6">{categoryName} Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    products.map(item => (
                        <div key={item._id} className="card w-80 bg-base-100 shadow-xl">
                            <figure><img src={item.img} alt={item.title} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.title}</h2>
                                <p>Price: ৳{item.price}</p>

                                <Link to={`/${categoryName.toLowerCase()}/${item._id}`}>
                                    <button className="btn btn-outline btn-success">View</button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryItems;
