import { Link } from "react-router-dom";
import logo from '../assets/Logo_black.png'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {

    const { user, logoutUser } = useContext(AuthContext);

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
            <li><a href="#footer">Contact</a></li>
            {user?.email ? <li><Link onClick={handleLogOut}>SignOut</Link></li> : <li><Link to="/login">Sign In</Link></li>}
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
                {/* <a className="btn">Button</a> */}
            </div>
        </div>
    );
};

export default Header;