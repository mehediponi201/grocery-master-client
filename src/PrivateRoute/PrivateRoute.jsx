import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from 'sweetalert'


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);


    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user?.email) {
        return children;
    }

    return <Navigate to="/login">
        {
            swal("Please,login to access your booking collection!!!")
        }
    </Navigate>
};

export default PrivateRoute;