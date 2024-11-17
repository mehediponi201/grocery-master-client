import quality_man from '../assets/premium_qualityMan.png'
import right_icon from '../assets/icons/right_symbol.png'

const Banner = () => {
    return (
        <div className='mt-6'>
            <div className='lg:flex items-center'>
                <div>
                    <img className='w-3/4' src={quality_man} alt="" />
                </div>
                <div className='space-y-4'>
                    <h3 className='text-4xl font-medium'>Best Quality Healthy And Fresh Grocery</h3>
                    <p>We prioritize quality in each of our grocery, below are the advantage of our products.
                        Organic food is food produced.</p>
                    <ul className='space-y-4'>
                        <li className='flex gap-2 '> <img src={right_icon} alt="" />Best Quality Healthy And Fresh Grocery </li>
                        <li className='flex gap-2 '> <img src={right_icon} alt="" />100% Organic & Natural Products </li>
                        <li className='flex gap-2 '> <img src={right_icon} alt="" />100% Returns & Refunds </li>
                        <li className='flex gap-2 '> <img src={right_icon} alt="" />User-Friendly Mobile Apps </li>
                    </ul>
                    <button className="btn btn-success text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;