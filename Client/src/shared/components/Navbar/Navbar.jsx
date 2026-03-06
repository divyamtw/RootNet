import { useNavigate } from "react-router";
import style from "./Navbar.module.scss";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <h1 className={style.logo}>RootNet</h1>
      <button
        onClick={() => {
          navigate("/create-post");
        }}
      >
        create post
      </button>
    </div>
  );
};

export default Navbar;
