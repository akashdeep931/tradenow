import { Link } from "react-router-dom";
import FormWrapper from "../hoc/FormWrapper";
import styles from "../styles";
import { ChangeEvent, FormEvent, useState } from "react";
import { LoginData } from "../../types/main";
import { postLogin } from "../api";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginData((currentData: LoginData): LoginData => {
      const newLoginData = {
        ...currentData,
        [event.target.name]: event.target.value,
      };

      return newLoginData;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    postLogin(loginData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setLoginError(err.response.data.msg);
      });
  };

  return (
    <section className={styles.heroSection}>
      <form onSubmit={handleSubmit} className={styles.authForm}>
        <label htmlFor="username" className={styles.formLabel}>
          Username
        </label>
        <input
          id="username"
          type="text"
          name="username"
          minLength={5}
          maxLength={15}
          value={loginData.username}
          onChange={handleChange}
          placeholder="Enter username here."
          required
          className={`${styles.formInput} mb-4`}
        />
        <label htmlFor="password" className={styles.formLabel}>
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          minLength={8}
          maxLength={20}
          value={loginData.password}
          onChange={handleChange}
          placeholder="Enter password here."
          required
          className={`${styles.formInput} ${loginError ? "mb-0" : "mb-7"}`}
          autoComplete="on"
        />
        <p
          className={`${loginError ? "block" : "hidden"} ${
            styles.formValidationErrors
          }`}
        >
          - {loginError}
        </p>
        <button type="submit" className={styles.formButton}>
          Log In
        </button>
        <Link
          to="/register"
          className="text-[#B4B6C4] underline hover:text-blue-400 text-center"
        >
          <p className="text-[14px] xs:text-[16px] md:text-[18px]">
            New here? Create Account
          </p>
        </Link>
      </form>
    </section>
  );
};

export default FormWrapper(Login);
