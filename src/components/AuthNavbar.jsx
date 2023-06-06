import { useParams, useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";

const AuthNavbar = () => {
    const { id } = useParams();
    const link = `/users/${id}`;
    const history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem("token");
        history.push("/");
    }
    return (
        <nav>
            <ul>
                <li><a href={"/home/"+id}>Home</a></li>
                <div className="right-item">
                    <li><Link to={link}>Profile</Link></li>
                    <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                </div>
            </ul>
        </nav>
    );
}

export default AuthNavbar;