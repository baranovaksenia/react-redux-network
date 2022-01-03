import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div>
  );
};

export default Profile;
