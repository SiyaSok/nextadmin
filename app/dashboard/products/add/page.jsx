/** @format */

import styles from "@/app/ui/dashboard/products/addProducts.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action='' className={styles.form}>
        <input
          type='text'
          id='title'
          name='title'
          placeholder='title'
          required
        />
        <select id='cat' name='cat'>
          <option value='general'>Choose a Category</option>
          <option value='Electronics'>Electronics</option>
          <option value='Clothing'>Clothing</option>
          <option value='Books'>Books</option>
        </select>
        <input
          type='number'
          id='price'
          name='price'
          placeholder='price'
          required
        />
        <input
          type='number'
          id='stock'
          name='stock'
          placeholder='stock'
          required
        />
        <input
          type='text'
          id='color'
          name='color'
          placeholder='color'
          required
        />
        <input type='text' id='size' name='size' placeholder='size' required />
        <textarea
          name='desc'
          id='desc'
          rows='16'
          placeholder='Description'></textarea>
        <button type='Submit' name='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
