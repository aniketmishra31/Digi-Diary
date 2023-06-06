import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Update = () => {
    const { id, post_id } = useParams();
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(`https://digi-diary-api.onrender.com/users/${id}/${post_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem('token')
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then(data => {
                setTitle(data.post.title);
                setContent(data.post.content);
            })
            .catch(err => {
                setError(err.message);
            })
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://digi-diary-api.onrender.com/users/${id}/${post_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({ title, content })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then(data => {
                setError(null);
                history.push(`/users/${id}`);
            })
            .catch(err => {
                setError(err.message);
            })
    }
    return (
        <>
            {title && content && <form onSubmit={handleSubmit}>
                <h3>Update diary</h3>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" required
                    value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="content">Content</label>
                <textarea id="content" name="content" required
                    value={content} onChange={(e) => setContent(e.target.value)}
                />
                <input type="submit" id="create-btn" value="Update" />
                {error && <div className="errors">{error}</div>}
            </form>}
        </>
    );
}

export default Update;