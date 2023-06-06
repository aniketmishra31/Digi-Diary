import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import loginImg from "./login.png";
const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [lenError, setLenError] = useState(false);
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.length < 6 || password.length < 6) {
            setLenError("Username and password must be at least 6 characters long");
            return;
        }
        const data = { username, password, name, age, gender };
        fetch('https://digi-diary-api.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not create user");
                }
                return res.json();
            })
            .then(data => {
                localStorage.setItem("token", data.token);
                history.push(`/users/${data.savedUser._id}`);
            })
            .catch(err => {
                setError(err.message);
            });

    }
    return (
        <>
            {!error && <form method="post" onSubmit={handleSubmit}>
                <p>Sign Up</p>
                <img src={loginImg} alt="login" width="125px" height="125px" />
                {lenError && <p className="errors">{lenError}</p>}
                <input type="text" name="username" placeholder="username" required
                    value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="text" name="name" id="fullName" placeholder="name" required
                    value={name} onChange={(e) => setName(e.target.value)}
                />
                <input type="number" name="age" id="age" placeholder="age" required
                    value={age} onChange={(e) => setAge(e.target.value)}
                />
                <input type="text" name="gender" id="gender" placeholder="gender" required
                    value={gender} onChange={(e) => setGender(e.target.value)}
                />
                <input type="password" name="password" placeholder="password" required
                    value={password} onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" value="Signup" />
            </form>}
            {error && <p className="errors">{error}</p>}
        </>
    );
}

export default Signup;