import swal from 'sweetalert';
import { useContext } from 'react';
import icon from '../assets/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {

    const {loginUser} = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password); 
        form.reset();

        //call login function
        loginUser(email,password)
        .then(result=>{
            console.log(result.user);
            swal("Successfully logIn!");
        }) 
        .catch(error=>{
            if(error)
            {
                swal("plz put valid email!");
            }
            console.log(error.message);
        })
        
    }

    return (
        <div className="mt-10 mb-10">
            <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-16">
                   <img src={icon} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-3xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Sign In</button>
                        </div>
                    </form>
                    <p className='text-center my-3 pb-3'>If you are new user 
                        <Link to="/signup" className='text-orange-500 font-bold'>Sign Up</Link> </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;