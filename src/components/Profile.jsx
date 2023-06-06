import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import PostsList from "./PostsList";

const Profile = () => {
    const { id } = useParams();
    const history = useHistory();
    const [postIds, setPostIds] = useState(null);
    const [posts, setPosts] = useState([]);
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // get user from id
    useEffect(() => {
        fetch(`https://digi-diary-api.onrender.com/users/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setName(data.user.name);
                setAge(data.user.age);
                setPostIds(data.user.posts);
                setError(null);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            })
    }, []);
    //get all posts from user
    useEffect(() => {
        fetch(`https://digi-diary-api.onrender.com/posts/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setPosts(data.posts);
                setError(null);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            })
    }, [])

    const handleClick = () => {
        history.push(`/users/${id}/create`);
    }

    return (
        <>
            {!error && !isLoading &&
                <div  className="user-page">
                    <h3 className="profile">Your Profile</h3>
                    <aside className="user-info">
                        {name && <h3>{name}</h3>}
                        {age && <p>Age: {age}</p>}
                        {postIds && <p>Journals: {postIds.length}</p>}
                    </aside>
                    {posts && <PostsList posts={posts} id={id} />}
                    <div className="create-btn">
                        <button className="btn" onClick={handleClick}>Add diary</button>
                    </div>
                </div>
            }
            <div className="errors loading">
                {isLoading && <p className="loading">Loading...</p>}
                {error && <p className="error">{error}</p>}
            </div>
        </>
    );
}

export default Profile;