import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import Home from './components/Home';
import About from './components/About';
import Categories from './Categories/Categories';
import Login from './LoginPage/Login';
import Signup from './SignUpPage/Signup';
import AuthProvider from './AuthProvider/AuthProvider';
import CheckOut from './pages/CheckOut';
import BookingsPage from './pages/BookingsPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ContactUs from './components/ContactUs';
import FishDetails from './FishComponent/FishDetails';
import GrainDetails from './GrainComponent/GrainDetails';
import CategoryItems from './Categories/CategoryItems';
import FruitDetails from './FruitComponent/FruitDetails';
import BeefDetails from './BeefComponent/BeefDetails';
import VegetableDetails from './VegetableComponent/VegetableDetails';
import ChickenDetails from './ChickenComponent/ChickenDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      },
      {
        path: '/categories',
        element: <Categories></Categories>,
        loader: () => fetch('http://localhost:5000/services')
        // loader: () => fetch('categories.json')
      },
      {
        path: "/category/:categoryName",
        element: <CategoryItems></CategoryItems>
      },
      {
        path: "/fish/:id",
        element: <FishDetails></FishDetails>
      },
      {
        path: "/grains/:id",
        element: <GrainDetails></GrainDetails>
      },
      {
        path: '/fruits/:id',
        element: <FruitDetails></FruitDetails>
      },
      {
        path: '/meat/:id',
        element: <BeefDetails></BeefDetails>
      },
      {
        path: '/vegetable/:id',
        element: <VegetableDetails></VegetableDetails>
      },
      {
        path: '/chicken/:id',
        element: <ChickenDetails></ChickenDetails>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/bookings",
        element: <PrivateRoute><BookingsPage></BookingsPage></PrivateRoute>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <AuthProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </AuthProvider>
  </div>
)
