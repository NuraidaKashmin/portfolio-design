import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";

const MainLayout = () => {
    return (
        <div className="mx-auto bg-base-300">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default MainLayout;