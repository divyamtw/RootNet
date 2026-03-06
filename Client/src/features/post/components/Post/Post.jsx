import style from "./Post.module.scss";

const Post = ({ caption, createdAt, img, user }) => {
  const formattedDate = new Date(createdAt).toLocaleString();

  return (
    <div className={style.main}>
      <div className={style.top}>
        <img src={user.profileImg} alt="profile-img" />

        <div className={style.usernamePostedat}>
          <h2>{user.username}</h2>
          <p>{formattedDate}</p>
        </div>
      </div>

      <div className={style.caption}>{caption}</div>

      {img && (
        <div className={style.img}>
          <img src={img} alt="post-img" />
        </div>
      )}
    </div>
  );
};

export default Post;
