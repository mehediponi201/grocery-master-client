import animation from '../assets/animations/aboutUsAnimation.gif';
import c_1 from '../assets/animations/family-grocery-store.jpg';

const About = () => {
    return (
        <div className='mt-10 px-4'>
            <div className='flex flex-col lg:flex-row justify-between gap-10 items-center'>
                <div className="space-y-4 w-full lg:w-1/2">
                    <h3 className="text-3xl sm:text-4xl font-semibold">
                        Welcome to Our Grocery Master
                    </h3>
                    <p>
                        At <strong>Grocery,</strong> we are committed to providing you with the freshest and highest quality products for your everyday needs. Our extensive range includes fresh vegetables, succulent meats, dairy products, pantry essentials,
                        and much more. We carefully select our suppliers to ensure that you receive only the best.
                    </p>
                    <p>
                        With our user-friendly interface and reliable delivery service, grocery shopping has never been easier. Simply browse our wide selection, add items to
                        your cart, and enjoy the convenience of doorstep delivery. Say goodbye to long supermarket queues and heavy bags.
                    </p>
                    <p>
                        We take pride in our commitment to exceptional customer service. Our dedicated support team is always ready to assist you with any questions or concerns you may have. Your satisfaction is our top priority.
                    </p>
                    <p>
                        Experience the convenience and joy of shopping from the comfort of your home.
                        Join us at Grocery and discover a new way to grocery shop.
                    </p>
                    <p>
                        Start shopping now and make your everyday life healthier and more convenient.
                    </p>
                </div>

                <div className='w-full lg:w-1/2 mt-6 lg:mt-0'>
                    <img
                        className='rounded-2xl w-full max-w-[600px] mx-auto'
                        src={c_1}
                        alt="Family Grocery Store"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;


// import animation from '../assets/animations/aboutUsAnimation.gif';
// import c_1 from '../assets/animations/family-grocery-store.jpg';

// const About = () => {
//     return (
//         <div className='mt-10'>
//             <div className='lg:flex justify-between gap-10'>
//                 <div className="space-y-4 lg:w-1/2">
//                     <h3 className="text-4xl font-medium">Welcome to Our Grocery Master</h3>
//                     <p>At <bold>Grocery,</bold> we are committed to providing you with the freshest and highest quality products for your everyday needs. Our extensive range includes fresh vegetables, succulent meats, dairy products, pantry essentials,
//                         and much more. We carefully select our suppliers to ensure that you receive only the best.</p>
//                     <p>With our user-friendly interface and reliable delivery service, grocery shopping has never been easier. Simply browse our wide selection, add items to
//                         your cart, and enjoy the convenience of doorstep delivery. Say goodbye to long supermarket queues and heavy bags.</p>
//                     <p>We take pride in our commitment to exceptional customer service. Our dedicated support team is always ready to assist you with any questions or concerns you may have. Your satisfaction is our top priority.
//                     </p>
//                     <p>Experience the convenience and joy of shopping from the comfort of your home.
//                         Join us at Grocery and discover a new way to grocery shop.</p>
//                     <p>Start shopping now and make your everyday life healthier and more convenient.</p>
//                 </div>
//                 <div className='lg:w-1/2'>
//                     <img className='rounded-2xl w-[600px]' src={c_1} alt="" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;