import animation from '../assets/animations/aboutUsAnimation.gif';

const About = () => {
    return (
        <div className='mt-10'>
            <div className='lg:flex  justify-between'>
                <div className="space-y-4 lg:w-1/2">
                    <h3 className="text-4xl font-medium">Welcome to Our Grocery Master</h3>
                    <p>At <bold>Grocery,</bold> we are committed to providing you with the freshest and highest quality products for your everyday needs. Our extensive range includes fresh vegetables, succulent meats, dairy products, pantry essentials,
                        and much more. We carefully select our suppliers to ensure that you receive only the best.</p>
                    <p>With our user-friendly interface and reliable delivery service, grocery shopping has never been easier. Simply browse our wide selection, add items to
                        your cart, and enjoy the convenience of doorstep delivery. Say goodbye to long supermarket queues and heavy bags.</p>
                    <p>We take pride in our commitment to exceptional customer service. Our dedicated support team is always ready to assist you with any questions or concerns you may have. Your satisfaction is our top priority.
                    </p>
                    <p>Experience the convenience and joy of shopping from the comfort of your home.
                        Join us at Grocery and discover a new way to grocery shop.</p>
                    <p>Start shopping now and make your everyday life healthier and more convenient.</p>
                </div>
                <div className='lg:w-1/2'>
                    <img src={animation} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;