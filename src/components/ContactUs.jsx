import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
//import img from '../assets/offer/carousel-2.jpg';
import img from '../assets/backgrounds/backgroundImg.jpg';


const ContactUs = () => {
    return (
        <div>
            <div className='mt-10'>
                <div
                    style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover", // To cover the entire container
                        backgroundPosition: "center", // To center the image
                        // height: "100vh", // Optional: Set height to fill the viewport
                        height: "500px",
                        display: "flex", // Use flexbox to center content
                        justifyContent: "center", // Center horizontally
                        alignItems: "center", // Center vertically
                        textAlign: "center",
                        position: "relative"// Center text if you have multiple lines
                    }}
                >

                    {/* Overlay div */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity for shadow intensity
                            zIndex: 1, // Ensure the overlay appears above the background
                        }}
                    ></div>

                    <div className='space-y-3' style={{ position: "relative", zIndex: 2 }}>
                        <h1 className="text-white text-center text-6xl font-bold">CONTACT US</h1>
                        <h2 className='text-white text-center text-2xl'>Get In Touch</h2>
                    </div>
                </div>
                {/* form  address design */}
                <div className="flex flex-col lg:flex-row p-10 space-y-8 lg:space-y-0 lg:space-x-16 bg-white items-center justify-center mt-10">
                    {/* Contact Information Section */}
                    <div className="space-y-8">
                        {/* Phone */}
                        <div className="flex items-start space-x-4">
                            <FiPhone className="text-3xl text-gray-700" />
                            <div>
                                <h3 className="text-xl font-semibold">Give us a call</h3>
                                <p>+1 (412) 567-4498</p>
                                <p>+880 2 883 6411</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start space-x-4">
                            <FiMail className="text-3xl text-gray-700" />
                            <div>
                                <h3 className="text-xl font-semibold">Send us an email</h3>
                                <p>info@grocerybd.com</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start space-x-4">
                            <FiMapPin className="text-3xl text-gray-700" />
                            <div>
                                <h3 className="text-xl font-semibold">Location</h3>
                                <p>House 251, Road 03</p>
                                <p>Pallabi,Mirpur, Dhaka 1212</p>
                                <p>Bangladesh</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="w-full lg:w-1/2">
                        <form className="space-y-6">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                            <input
                                type="text"
                                placeholder="Company"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                            <textarea
                                placeholder="Message"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                rows="4"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-red-600 text-white font-bold py-2 rounded hover:bg-red-700"
                            >
                                SEND
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;