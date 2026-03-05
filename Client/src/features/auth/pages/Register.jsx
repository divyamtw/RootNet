import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router";
import { registerSchema } from "../../../shared/validations/schemas";
import useZodForm from "../../../shared/hooks/useZodForm";
import style from "./Auth.module.scss";

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useZodForm(registerSchema);

  const { loading, error, handleRegister } = useAuth();
  const navigate = useNavigate();

  const submitForm = async (data) => {
    const { firstname, lastname, username, email, password } = data;
    const success = await handleRegister(
      firstname,
      lastname,
      username,
      email,
      password,
    );
    if (success) await navigate("/");
  };

  return (
    <main>
      <div className={style.container}>
        <h1 className={style.title}>Create Account</h1>

        <form onSubmit={handleSubmit(submitForm)}>
          {error && <p className={style.error}>{error}</p>}

          <div className={style.inp}>
            <input
              id="first-name"
              type="text"
              {...register("firstname")}
              placeholder="First name..."
            />
            {errors.firstname && (
              <span className={style.error}>{errors.firstname.message}</span>
            )}
          </div>

          <div className={style.inp}>
            <input
              id="last-name"
              type="text"
              {...register("lastname")}
              placeholder="Last name..."
            />
            {errors.lastname && (
              <span className={style.error}>{errors.lastname.message}</span>
            )}
          </div>

          <div className={style.inp}>
            <input
              id="username"
              type="text"
              {...register("username")}
              placeholder="Username..."
            />
            {errors.username && (
              <span className={style.error}>{errors.username.message}</span>
            )}
          </div>

          <div className={style.inp}>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Email..."
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
              placeholder="Password..."
            />
            {errors.password && (
              <span className={style.error}>{errors.password.message}</span>
            )}
          </div>

          <button className={style.button} type="submit" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          <p className={style.createOne}>
            Already have an account?{" "}
            <Link className={style.link} to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Register;
