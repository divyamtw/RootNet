import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router";
import { loginSchema } from "../../../shared/validations/schemas";
import useZodForm from "../../../shared/hooks/useZodForm";
import style from "./Auth.module.scss";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useZodForm(loginSchema);
  const { loading, error, handleLogin } = useAuth();
  const navigate = useNavigate();

  const submitForm = async (data) => {
    const success = await handleLogin(data.email, data.password);
    if (success) await navigate("/");
  };

  return (
    <main>
      <div className={style.container}>
        <h1 className={style.title}>Login</h1>

        <form onSubmit={handleSubmit(submitForm)}>
          {error && <p className={style.error}>{error}</p>}

          <div className={style.inp}>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="email..."
            />
            {errors.email && (
              <span className={style.error}>{errors.email.message}</span>
            )}
          </div>

          <div className={style.inp}>
            <input
              id="password"
              type="password"
              {...register("password")}
              placeholder="password..."
            />
            {errors.password && (
              <span className={style.error}>{errors.password.message}</span>
            )}
          </div>

          <button className={style.button} type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className={style.createOne}>
            Don't have an account?{" "}
            <Link className={style.link} to="/register">
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
