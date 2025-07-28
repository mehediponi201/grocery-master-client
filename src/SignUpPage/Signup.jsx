import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';
import signUpAnimation from '../assets/Login Leady.json';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import SocialLogin from '../socalComponent/SocialLogin';

const Signup = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ name, photo, email, password });

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        updateUserProfile(name, photo)
          .then(() => {
            const userInfo = { name, email, photo };
            axios.post('http://localhost:5000/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  Swal.fire({
                    title: "Successfully signed up & updated profile!",
                    icon: "success",
                    draggable: true
                  });
                }
              });
          })
          .catch(error => {
            console.log(error.message);
          });

      })
      .catch((error) => {
        console.log(error.message);
      });

    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-base-50">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Animation Section */}
          <div className="w-full lg:w-1/2">
            <Lottie animationData={signUpAnimation} className="w-full max-w-md mx-auto" />
          </div>

          {/* SignUp Form Section */}
          <div className="card w-full lg:max-w-md bg-base-100 shadow-2xl mx-auto">
            <div className="card-body">
              <h1 className="text-3xl font-bold text-center">Sign Up Now!</h1>
              <form onSubmit={handleSignUp} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full"
                    placeholder="Your Name"
                    required
                  />
                </div>

                {/* Photo URL */}
                <div>
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    name="photo"
                    className="input input-bordered w-full"
                    placeholder="Photo URL"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full"
                    placeholder="Email"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="input input-bordered w-full"
                    placeholder="Password"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-neutral w-full">
                  Sign Up
                </button>
              </form>

              {/* Login Link */}
              <p className="text-center font-semibold mt-4">
                Already Registered?{" "}
                <Link to="/login" className="link text-blue-700">
                  Go to Login
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

export default Signup;








