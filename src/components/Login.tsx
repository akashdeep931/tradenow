import { Link, useNavigate } from "react-router-dom";
import FormWrapper from "../hoc/FormWrapper";
import styles from "../styles";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { LoginData } from "../../types/main";
import { fetchAuth, postLogin } from "../api";
import { GridLoader } from "react-spinners";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAuth()
      .then((res) => {
        navigate(`/${res.data.user.user_id}/home`);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

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
    setIsLoading(true);

    postLogin(loginData)
      .then((res) => {
        navigate(`/${res.data.user.user_id}/home`);
      })
      .catch((err) => {
        setIsLoading(false);

        if (err.message === "Network Error") {
          const networkErrorMessage =
            "Oops, something went wrong! Try Again later.";
          setError(networkErrorMessage);
        } else {
          const errorMessage = err.response.data.msg;
          setError(errorMessage);
        }
      });
  };

  return isLoading ? (
    <GridLoader color="rgba(187, 191, 200, 1)" />
  ) : (
    <form onSubmit={handleSubmit} className={styles.loginAuthForm}>
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
        className={`${styles.formInput} ${error ? "mb-0" : "mb-7"}`}
        autoComplete="on"
      />
      <p
        className={`${error ? "block" : "hidden"} ${
          styles.formValidationErrors
        }`}
      >
        - {error}
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
  );
};

export default FormWrapper(Login);
