import delivery_man from '../assets/deliveryMan.png';
import icon1 from '../assets/icons/service_icons/headphones.png';
import icon2 from '../assets/icons/service_icons/location.png';
import icon3 from '../assets/icons/service_icons/price.png';
import icon4 from '../assets/icons/service_icons/truck.png';

const Quality = () => {
    return (
        <div className='mt-10 mb-5 px-4 md:px-8'>
            <div className='flex flex-col-reverse lg:flex-row items-center gap-10'>
                {/* Text Content */}
                <div className='w-full lg:w-1/2 space-y-4'>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>
                        Why We’re Best Quality Grocery Shopper
                    </h3>
                    <p className='text-sm md:text-base text-gray-700'>
                        We offer a wide variety of products to choose from — you can find everything you need to feed your family.
                    </p>
                    <ul className='space-y-4'>
                        <li className='flex items-start gap-2'>
                            <img className='w-6 mt-1' src={icon1} alt="Headphones Icon" />
                            <span>Extra Fastest Delivery</span>
                        </li>
                        <li className='flex items-start gap-2'>
                            <img className='w-6 mt-1' src={icon2} alt="Location Icon" />
                            <span>Track and Manage Orders</span>
                        </li>
                        <li className='flex items-start gap-2'>
                            <img className='w-6 mt-1' src={icon3} alt="Price Icon" />
                            <span>Customer Support</span>
                        </li>
                        <li className='flex items-start gap-2'>
                            <img className='w-6 mt-1' src={icon4} alt="Truck Icon" />
                            <span>Competitive Price</span>
                        </li>
                    </ul>
                </div>

                {/* Image Section */}
                <div className='w-full lg:w-1/2 flex justify-center'>
                    <img className='w-3/4 md:w-2/3 lg:w-full max-w-sm md:max-w-md lg:max-w-lg' src={delivery_man} alt="Delivery Man" />
                </div>
            </div>
        </div>
    );
};

export default Quality;


// import delivery_man from '../assets/deliveryMan.png';
// import icon1 from '../assets/icons/service_icons/headphones.png'
// import icon2 from '../assets/icons/service_icons/location.png'
// import icon3 from '../assets/icons/service_icons/price.png'
// import icon4 from '../assets/icons/service_icons/truck.png'

// const Quality = () => {
//     return (
//         <div className='mt-10 mb-5'>
//             <div className='lg:flex lg:items-center'>
//                 <div className='space-y-3'>
//                     <h3 className='text-3xl font-semibold'>Why We’re Best Quality grocery Shopper</h3>
//                     <p>We offer a wide variety of products to choose from you can find everything you need to feed your family.</p>
//                     <ul className='space-y-4'>
//                         <li className='flex gap-2'> <img className='w-6' src={icon1} alt="" />Extra Fastest Delivery </li>
//                         <li className='flex gap-2'> <img className='w-6' src={icon2} alt="" />Track and Manage Orders </li>
//                         <li className='flex gap-2'> <img className='w-6' src={icon3} alt="" />Customer Support </li>
//                         <li className='flex gap-2'> <img className='w-6' src={icon4} alt="" />Competitive Price </li>
//                     </ul>
//                 </div>
//                 <div>
//                     <img className='w-3/4' src={delivery_man} alt="" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Quality;