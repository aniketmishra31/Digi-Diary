import { Link } from "react-router-dom/cjs/react-router-dom.min";
const PostsList = (props) => {
    const id = props.id;
    const posts = props.posts;
    return (
        <span className="posts-list" >
            {
                posts.map((post) => (
                    <Link to={`/users/${id}/${post._id}`} key={post._id}>
                        <span className="post-preview" key={post._id}>
                            <p>{post.title}</p>
                        </span>
                    </Link>
                ))
            }
        </span>
    );
}

export default PostsList;