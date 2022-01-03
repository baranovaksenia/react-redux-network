import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
