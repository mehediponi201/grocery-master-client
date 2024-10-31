import { Outlet } from "react-router-dom";
import Footer from "../assets/Footer";
import Header from "./Header";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;