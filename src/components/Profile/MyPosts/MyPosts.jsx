import style from "./MyPosts.module.css";
import Post from "./../Post/Post";
const MyPosts = ({ posts }) => {
  let postsElements = posts.map((p) => (
    <Post message={p.post} id={p.id} likes={p.likes} />
  ));
  return (
    <div className={style.allPosts}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
