/** @format */

import styles from "@/app/ui/login/login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.title}>LogIn</h2>
        <input
          type='text'
          placeholder='username'
          name='username'
          id='username'
        />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='password'
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
