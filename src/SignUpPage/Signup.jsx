import { Link } from 'react-router-dom';
import login from '../assets/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import swal from 'sweetalert';

const Signup = () => {

    const { user,createUser} = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();

        //call registration function
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            swal("Successfully Regristration Complete!!!");
        })
        .catch(error =>{
            console.log(error.message);
            console.log(error.code);
            
        })
    }

    return (
        <div className='mt-10 mb-10'>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-16">
                        <img src={login} alt="" />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSignUp} className="card-body">
                            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Sign Up</button>
                            </div>
                        </form>
                        <p className='text-center my-3 pb-3'>Already have an account
                            <Link to="/login" className='text-orange-500 font-bold'>Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;