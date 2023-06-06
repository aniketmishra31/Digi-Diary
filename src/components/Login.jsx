import { useState } from "react";
import { useHistory } from "react-router-dom";
import loginImg from "./login.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { username, password };
        fetch('https://digi-diary-api.onrender.com/auth/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
            .then((res) => {
                if (!res.ok) {
                    throw Error("User does not exist");
                }
                return res.json();
            })
            .then(data => {
                if (data.token) {
                    localStorage.setItem("token", data.token, true);
                }
                history.push(`users/${data.user._id}`);
            })
            .catch((err) => {
                setError(err.message);
            });
    }
    return (
        <div className="container">
            <form method="post" onSubmit={handleSubmit}>
                <h3>Login</h3>
                <img src={loginImg} alt="login" width="125px" height="125px" />
                {error && <div className="errors">
                    <p>{error}</p>
                </div>}
                <input type="text" name="username" placeholder="Username" required
                    value={username} onChange={(e) => setUsername(e.target.value)}
                />
                <input type="password" name="password" placeholder="Password" required
                    value={password} onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" value="Login" />
                <p className="create-account">Don't have an account <Link to="/signup">create one</Link></p>
            </form>
        </div>
    );
}

export default Login; 