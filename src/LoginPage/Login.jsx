import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Lottie from 'lottie-react';
import loginAnimation from '../assets/Login.json';
import Swal from 'sweetalert2';
import SocialLogin from '../socalComponent/SocialLogin';

const Login = () => {

    const { loginUser } = useContext(AuthContext);
    const [disable, setDisable] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                // sweet alert
                Swal.fire({
                    title: "Successfully Login",
                    icon: "success",
                    draggable: true
                });
            })
            .catch(error => {
                console.log(error.message);
            })
        // reset the form
        e.target.reset();
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }

    return (
        <div>
            <div className="hero bg-base-50 min-h-screen px-4">
                <div className="hero-content flex-col lg:flex-row gap-10 w-full max-w-6xl">
                    {/* Animation Section */}
                    <div className="text-center lg:text-left w-full lg:w-1/2">
                        <Lottie className="w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto" animationData={loginAnimation}></Lottie>
                    </div>

                    {/* Login Card */}
                    <div className="card bg-base-100 w-full lg:w-1/2 max-w-md shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center">Login now!</h1>
                            <form onSubmit={handleLogin} className="space-y-4">
                                <div>
                                    <label className="label">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="input input-bordered w-full"
                                        placeholder="Email"
                                    />
                                </div>
                                <div>
                                    <label className="label">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="input input-bordered w-full"
                                        placeholder="Password"
                                    />
                                </div>
                                <div>
                                    <LoadCanvasTemplate />
                                    <input
                                        onBlur={handleValidateCaptcha}
                                        type="text"
                                        name="captcha"
                                        className="input input-bordered w-full mt-2"
                                        placeholder="Write the above captcha"
                                    />
                                </div>
                                <button disabled={disable} className="btn btn-neutral w-full">
                                    Login
                                </button>
                            </form>
                            <p className="text-center font-bold">
                                New here?{" "}
                                <Link to="/signup" className="text-blue-700 underline">
                                    Create an account
                                </Link>
                            </p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;



// import swal from 'sweetalert';
// import { useContext} from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../AuthProvider/AuthProvider';
// import Lottie from 'lottie-react';
// import loginAnimation from '../assets/Login.json';
// import Swal from 'sweetalert2';

// const Login = () => {
//     const { loginUser } = useContext(AuthContext);

//     const handleLogin = e => {
//         e.preventDefault();
//         const form = e.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         form.reset();

//         loginUser(email, password)
//             .then(result => {
//                 console.log(result.user);
//                 // sweet alert
//                 Swal.fire({
//                     title: "Successfully Login",
//                     icon: "success",
//                     draggable: true
//                 });

//             })
//             .catch(error => {
//                 swal("Please enter a valid email or password!");
//                 console.log(error.message);
//             });
//         // reset the form
//         e.target.reset();
//     } 


//     return (
//         <div className="min-h-screen bg-base-400 flex items-center justify-center px-4 py-10">
//             <div className="flex flex-col lg:flex-row items-center gap-10 w-full max-w-6xl mx-auto">
//                 {/* Lottie Animation */}
//                 <div className="w-full lg:w-1/2">
//                     <Lottie animationData={loginAnimation} className="w-full max-w-md mx-auto" />
//                 </div>

//                 {/* Login Form */}
//                 <div className="w-full lg:w-1/2 bg-base-100 p-6 rounded-xl shadow-lg max-w-md mx-auto">
//                     <form onSubmit={handleLogin} className="space-y-4">
//                         <h2 className="text-3xl font-bold text-center mb-4">Login</h2>

//                         <div>
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="Email"
//                                 className="input input-bordered w-full"
//                                 required
//                             />
//                         </div>

//                         <div>
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 placeholder="Password"
//                                 className="input input-bordered w-full"
//                                 required
//                             />
//                             <label className="label">
//                                 <span className="label-text-alt text-sm text-right w-full">Forgot password?</span>
//                             </label>
//                         </div>

//                         <button type="submit" className="btn btn-warning w-full">Sign In</button>

//                         <p className='text-center font-bold'>New here ? <Link to="/signup">Create an account</Link> </p>
//                     </form>
//                 </div>
//             </div>
//         </div>      

//     );
// };

// export default Login;




// import swal from 'sweetalert';
// import { useContext } from 'react';
// import icon from '../assets/login/login.svg'
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../AuthProvider/AuthProvider';
// import Lottie from 'lottie-react';
// import loginPic from '../assets/Login.json';

// const Login = () => {

//     const {loginUser} = useContext(AuthContext);

//     const handleLogin = e =>{
//         e.preventDefault();
//         const form = e.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email,password); 
//         form.reset();

//         //call login function
//         loginUser(email,password)
//         .then(result=>{
//             console.log(result.user);
//             swal("Successfully logIn!");
//         }) 
//         .catch(error=>{
//             if(error)
//             {
//                 swal("plz put valid email!");
//             }
//             console.log(error.message);
//         })
        
//     }

//     return (
//         <div className="mt-10 mb-10">
//             <div className="hero bg-base-200 min-h-screen">
//             <div className="hero-content flex-col lg:flex-row">
//                 <div className="w-1/2 mr-16">
//                    {/* <img src={icon} alt="" /> */}
//                    <Lottie animationData={loginPic}></Lottie>
//                 </div>
//                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                     <form onSubmit={handleLogin} className="card-body">
//                     <h1 className="text-3xl font-bold text-center">Login</h1>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="email" name='email' placeholder="email" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input type="password" name='password' placeholder="password" className="input input-bordered" required />
//                             <label className="label">
//                                 <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                             </label>
//                         </div>
//                         <div className="form-control mt-6">
//                             <button className="btn btn-warning">Sign In</button>
//                         </div>
//                     </form>
//                     <p className='text-center my-3 pb-3'>If you are new user 
//                         <Link to="/signup" className='text-orange-500 font-bold'>Sign Up</Link> </p>
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default Login;