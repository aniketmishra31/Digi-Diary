import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import AuthNavbar from "./AuthNavbar";
import Cover from "./Cover";
import Footer from "./Footer";

const Home = () => {
    const id=useParams();
    return (
        <>
            <AuthNavbar />
            <Cover id={id} />
            <Footer />
        </>
    );
}

export default Home;