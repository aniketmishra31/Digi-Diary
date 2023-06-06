import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);
    const history = useHistory();
    const { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { title, content };
        fetch(`https://digi-diary-api.onrender.com/users/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not post the diary please try again.');
                }
                return res.json();
            })
            .then(data => {
                history.push(`/users/${id}`);
            })
            .catch(err => {
                setError(err.message);
            })
    }

    return (
        <>
            <form method="POST" onSubmit={handleSubmit}>
                <h3>Create diary</h3>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" required
                    value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="content">Content</label>
                <textarea id="content" name="content" required
                    value={content} onChange={(e) => setContent(e.target.value)}
                />
                <input type="submit" id="create-btn" value="Create" />
                {error && <div className="errors">{error}</div>}
            </form>
        </>
    );
}

export default Create;