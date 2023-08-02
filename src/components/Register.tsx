import { Link, useNavigate } from "react-router-dom";
import FormWrapper from "../hoc/FormWrapper";
import styles from "../styles";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { UserBody } from "../../types/main";
import { fetchAuth, postUser } from "../api";
import { GridLoader } from "react-spinners";
import { check } from "../assets";

interface UserData extends UserBody {
  confirmPassword: string;
}

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    name: "",
    surname: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState("");

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
    setUserData((currentForm: UserData): UserData => {
      const newForm: UserData = {
        ...currentForm,
        [event.target.name]: event.target.value,
      };

      return newForm;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    if (userData.password !== userData.confirmPassword) {
      setError("Passwords don't match!");
      setIsLoading(false);
      return;
    }

    const { username, name, surname, password } = userData;
    const body: UserBody = { username, name, surname, password };

    postUser(body)
      .then(() => {
        setTimeout(() => {
          navigate("/login");
        }, 3000);

        setIsLoading(false);
        setUserCreated(true);
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

  return userCreated ? (
    <figure className="flex flex-col justify-center items-center">
      <img src={check} alt="confirmed gif" />
      <p className="text-[19px] xs:text-[24px] md:text-[32px] text-[#bbbfc8]">
        User successfully created!
      </p>
    </figure>
  ) : isLoading ? (
    <GridLoader color="rgba(187, 191, 200, 1)" />
  ) : (
    <form onSubmit={handleSubmit} className={styles.registerAuthForm}>
      <label htmlFor="username" className={styles.formLabel}>
        Username
      </label>
      <input
        id="username"
        type="text"
        name="username"
        minLength={5}
        maxLength={15}
        value={userData.username}
        onChange={handleChange}
        placeholder="Enter username here."
        required
        className={`${styles.formInput} md:mb-4`}
      />
      <label htmlFor="name" className={styles.formLabel}>
        Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        minLength={3}
        maxLength={15}
        value={userData.name}
        onChange={handleChange}
        placeholder="Enter name here."
        required
        className={`${styles.formInput} md:mb-4`}
      />
      <label htmlFor="name" className={styles.formLabel}>
        Surname
      </label>
      <input
        id="surname"
        type="text"
        name="surname"
        minLength={3}
        maxLength={15}
        value={userData.surname}
        onChange={handleChange}
        placeholder="Enter surname here."
        required
        className={`${styles.formInput} md:mb-4`}
      />
      <label htmlFor="user-password" className={styles.formLabel}>
        Password
      </label>
      <input
        id="user-password"
        type="password"
        name="password"
        minLength={8}
        maxLength={20}
        value={userData.password}
        onChange={handleChange}
        placeholder="Enter password here."
        required
        className={`${styles.formInput}`}
        autoComplete="on"
      />
      <input
        id="confirm-password"
        type="password"
        name="confirmPassword"
        minLength={8}
        maxLength={20}
        value={userData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm password."
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
        Sign Up
      </button>
      <Link
        to="/login"
        className="text-[#B4B6C4] underline hover:text-blue-400 text-center"
      >
        <p className="text-[14px] xs:text-[16px] md:text-[18px]">
          Already have an account? Log In
        </p>
      </Link>
    </form>
  );
};

export default FormWrapper(Register);
