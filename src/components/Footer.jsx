import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
    return (
        <footer className="bottom-container">
            <ul>
                <li><Link to="/help">Help</Link></li>
                <li><Link to="contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </footer>
    );
}

export default Footer;