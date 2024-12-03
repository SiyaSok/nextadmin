/** @format */
import styles from "@/app/ui/dashboard/users/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.userImage}
            src='/noavatar.png'
            alt='user'
            fill
          />
        </div>
        Jimmy Barker
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input
            type='text'
            placeholder='Username'
            name='username'
            id='username'
          />
          <input type='email' placeholder='email' name='email' id='email' />

          <input
            type='password'
            placeholder='password'
            name='password'
            id='password'
          />

          <input
            type='phone'
            placeholder='Phone number'
            name='phone'
            id='phone'
          />

          <textarea
            name='address'
            id='address'
            rows='5'
            placeholder='Address'></textarea>

          <select id='isAdmin' name='isAdmin'>
            <option value={false} selected>
              is Admin
            </option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <select id='is' name='Active'>
            <option value={false}>is Active</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <button type='Submit' name='submit'>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
