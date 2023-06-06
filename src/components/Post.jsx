import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

const Post = () => {
    const { id, post_id } = useParams();
    const [title, setTitle] = useState(null);
    const [content, setContent] = useState(null);
    const [error, setError] = useState(null);
    const history = useHistory();

    useEffect(() => {
        fetch(`https://digi-diary-api.onrender.com/users/${id}/${post_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
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
    const handleClick = () => {
        fetch(`https://digi-diary-api.onrender.com/users/${id}/${post_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
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
    const update = () => {
        history.push(`/users/${id}/${post_id}/update`);
    }
    return (
        <>
            {error && <p className="errors">{error}</p>}
            {!error &&
                <div className="post">
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <button className="btn delete" onClick={handleClick}>Delete</button>
                    <button className="btn update" onClick={update}>Update</button>
                </div>
            }
        </>
    );
}

export default Post;