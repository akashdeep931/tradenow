import { Link } from "react-router-dom";
import FormWrapper from "../hoc/FormWrapper";
import styles from "../styles";

const Login = () => {
  return (
    <section className={styles.heroSection}>
      <form className={styles.authForm}>
        <label htmlFor="username" className={styles.formLabel}>
          Username
        </label>
        <input
          id="username"
          type="text"
          name="username"
          minLength={5}
          maxLength={15}
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
          placeholder="Enter password here."
          required
          className={`${styles.formInput} mb-7`}
        />
        <button type="submit" className={styles.formButton}>
          Log In
        </button>
        <Link
          to="/register"
          className="text-[#B4B6C4] underline hover:text-blue-400 text-center"
        >
          <p>Create Account</p>
        </Link>
      </form>
    </section>
  );
};

export default FormWrapper(Login);
