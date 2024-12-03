/** @format */

import styles from "@/app/ui/dashboard/users/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action='' className={styles.form}>
        <input
          type='text'
          id='Username'
          name='Username'
          placeholder='Username'
          required
        />

        <input
          type='email'
          id='email'
          name='email'
          placeholder='something@gmail.com'
          required
        />
        <input
          type='password'
          id='password'
          name='password'
          placeholder='**********'
          required
        />
        <input type='phone' id='phone' name='phone' placeholder='Phone' />
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
        <textarea
          name='address'
          id='address'
          rows='16'
          placeholder='Address'></textarea>
        <button type='Submit' name='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
