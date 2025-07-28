
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/Logo_black.png'
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
// Sample products data
const products = [
    { service_id: "01", title: "Fish" },
    { service_id: "02", title: "Fruits" },
    { service_id: "03", title: "Grains" },
    { service_id: "04", title: "Meat" },
    { service_id: "05", title: "Vegetable" },
    { service_id: "06", title: "Chicken" },
];

const Header = () => {

    const { user, logoutUser } = useContext(AuthContext);


    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        if (query.trim() !== "") {
            const filtered = products.filter(product =>
                product.title.toLowerCase().includes(query)
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    };

    const handleProductClick = (productId) => {
        // navigate(`/categories/${productId}`);
        navigate(`/categories`);
        setSearchQuery(""); // Clear search bar
        setFilteredProducts([]);
    };



    const handleLogOut = () => {
        logoutUser()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }

    const navLink =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            {user?.email ? <>
                <li><Link to="/bookings">My Bookings</Link></li>
                <li><Link onClick={handleLogOut}>SignOut</Link></li>
            </>
                : <li><Link to="/login">Sign In</Link></li>
            }
            <li><Link to="/signup">Sign Up</Link></li>
        </>

    return (
        <div className="navbar bg-base-100 mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navLink
                        }

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <Link to="/"><img src={logo} alt="" /></Link>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLink
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search Products"
                        className="input input-bordered w-32 md:w-auto"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
            </div>

            {searchQuery && (
                <div className="absolute top-16 right-0 w-64 bg-white shadow-lg rounded-lg">
                    <ul>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <li
                                    key={product.service_id}
                                    className="p-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleProductClick(product.service_id)}
                                >
                                    {product.title}
                                </li>
                            ))
                        ) : (
                            <li className="p-2 text-gray-500">No products found</li>
                        )}
                    </ul>
                </div>
            )}
        </div>

    );
};

export default Header;

