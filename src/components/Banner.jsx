import quality_man from '../assets/premium_qualityMan.png';
import right_icon from '../assets/icons/right_symbol.png';

const Banner = () => {
    return (
        <div className='mt-6 px-4 md:px-8'>
            <div className='flex flex-col-reverse lg:flex-row items-center gap-10'>
                {/* Text Content */}
                <div className='w-full lg:w-1/2 space-y-4'>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-medium'>
                        Best Quality Healthy And Fresh Grocery
                    </h3>
                    <p className='text-sm md:text-base text-gray-700'>
                        We prioritize quality in each of our grocery, below are the advantages of our products.
                        Organic food is food produced.
                    </p>
                    <ul className='space-y-3'>
                        <li className='flex items-start gap-2'>
                            <img src={right_icon} className='w-5 mt-1' alt="check icon" />
                            <span>Best Quality Healthy And Fresh Grocery</span>
                        </li>
                        <li className='flex items-start gap-2'>
                            <img src={right_icon} className='w-5 mt-1' alt="check icon" />
                            <span>100% Organic & Natural Products</span>
                        </li>
                        <li className='flex items-start gap-2'>
                            <img src={right_icon} className='w-5 mt-1' alt="check icon" />
                            <span>100% Returns & Refunds</span>
                        </li>
                        <li className='flex items-start gap-2'>
                            <img src={right_icon} className='w-5 mt-1' alt="check icon" />
                            <span>User-Friendly Mobile Apps</span>
                        </li>
                    </ul>
                    <button className="btn btn-success text-white">Order Now</button>
                </div>

                {/* Image Section */}
                <div className='w-full lg:w-1/2 flex justify-center'>
                    <img className='w-3/4 md:w-2/3 lg:w-full max-w-sm md:max-w-md lg:max-w-lg' src={quality_man} alt="Quality Man" />
                </div>
            </div>
        </div>
    );
};

export default Banner;


// import quality_man from '../assets/premium_qualityMan.png'
// import right_icon from '../assets/icons/right_symbol.png'

// const Banner = () => {
//     return (
//         <div className='mt-6'>
//             <div className='lg:flex items-center'>
//                 <div>
//                     <img className='w-3/4' src={quality_man} alt="" />
//                 </div>
//                 <div className='space-y-4'>
//                     <h3 className='text-4xl font-medium'>Best Quality Healthy And Fresh Grocery</h3>
//                     <p>We prioritize quality in each of our grocery, below are the advantage of our products.
//                         Organic food is food produced.</p>
//                     <ul className='space-y-4'>
//                         <li className='flex gap-2 '> <img src={right_icon} alt="" />Best Quality Healthy And Fresh Grocery </li>
//                         <li className='flex gap-2 '> <img src={right_icon} alt="" />100% Organic & Natural Products </li>
//                         <li className='flex gap-2 '> <img src={right_icon} alt="" />100% Returns & Refunds </li>
//                         <li className='flex gap-2 '> <img src={right_icon} alt="" />User-Friendly Mobile Apps </li>
//                     </ul>
//                     <button className="btn btn-success text-white">Order Now</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;