import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Digi Diary</a></li>
                <div className="right-item">
                    <li><Link to="/login">Log in</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;