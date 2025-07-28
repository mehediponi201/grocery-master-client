import customer from '../assets/hero_customer.png';
import back1 from '../assets/backgrounds/1_bg.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={
            {
                backgroundImage: `url(${back1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '20px'
                //height: '100vh'
            }
        } className='lg:flex items-center'>
            <div className="space-y-5">
                <h3 className="text-4xl font-bold">Make healthy life <br /> with
                    <span className="text-green-500">fresh grocery</span> products</h3>
                <p>Get the best quality and most delicious grocery food in the world, you can get them our website.
                    Fresh grocery every day to your family.</p>
                <Link to="/categories">
                    <button className="btn btn-active btn-success text-white mt-2">Show Categories</button>
                </Link>
            </div>
            <div>
                <img src={customer} alt="" />
            </div>
        </div>
    );
};

export default Navbar;