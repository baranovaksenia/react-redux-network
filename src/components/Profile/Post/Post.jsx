import style from "./Post.module.css";

const Post = ({ message, likes }) => {
  return (
    <div className={style.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU" />
      {message}
      <div>
        <span>Like {likes}</span>
      </div>
    </div>
  );
};

export default Post;
