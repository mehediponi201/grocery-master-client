// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const FishItems = () => {

//     const { categoryName } = useParams();
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetch(`http://localhost:5000/fishes?category=${categoryName}`)
//             .then(res => res.json())
//             .then(data => setProducts(data));
//     }, [categoryName]);

//      if (!products) return <p>Loading...</p>;

//     return (
//         <div className="mt-10">
//             <h2 className="text-3xl font-semibold text-center mb-6">{categoryName} Items</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {
//                     products.map(item => (
//                         <div key={item._id} className="card w-80 bg-base-100 shadow-xl">
//                             <figure><img src={item.img} alt={item.title} /></figure>
//                             <div className="card-body">
//                                 <h2 className="card-title">{item.title}</h2>
//                                 <p>Price: ৳{item.price}</p>
//                                 <Link to={`/fish/${item._id}`}>
//                                     <button className="btn btn-outline btn-success">View</button>
//                                 </Link>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default FishItems;