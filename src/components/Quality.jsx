import delivery_man from '../assets/deliveryMan.png';
import icon1 from '../assets/icons/service_icons/headphones.png'
import icon2 from '../assets/icons/service_icons/location.png'
import icon3 from '../assets/icons/service_icons/price.png'
import icon4 from '../assets/icons/service_icons/truck.png'

const Quality = () => {
    return (
        <div className='mt-10 mb-5'>
            <div className='flex items-center'>
                <div className='space-y-3'>
                    <h3 className='text-3xl font-semibold'>Why We’re Best Quality grocery Shopper</h3>
                    <p>We offer a wide variety of products to choose from you can find everything you need to feed your family.</p>
                    <ul className='space-y-4'>
                        <li className='flex gap-2 text-2xl'> <img src={icon1} alt="" />Extra Fastest Delivery </li>
                        <li className='flex gap-2 text-2xl'> <img src={icon2} alt="" />Track and Manage Orders </li>
                        <li className='flex gap-2 text-2xl'> <img src={icon3} alt="" />Customer Support </li>
                        <li className='flex gap-2 text-2xl'> <img src={icon4} alt="" />Competitive Price </li>
                    </ul>
                </div>
                <div>
                    <img className='w-3/4' src={delivery_man} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Quality;