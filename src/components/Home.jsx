import CarouselItem from "../assets/CarouselItem";
import Banner from "./Banner";
import Navbar from "./Navbar";
import PeopleSay from "./PeopleSay";
import Quality from "./Quality";


const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <CarouselItem></CarouselItem>
           <Banner></Banner>
           <PeopleSay></PeopleSay>
           <Quality></Quality>
        </div>
    );
};

export default Home;