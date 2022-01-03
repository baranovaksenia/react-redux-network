import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://staffordonline.org/wp-content/uploads/2016/10/Web-Design.jpg" />
      </div>
      <div className={style.description}>avatar+ description</div>
    </div>
  );
};

export default ProfileInfo;
