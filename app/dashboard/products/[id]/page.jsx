/** @format */
import styles from "@/app/ui/dashboard/products/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.userImage}
            src='/noproduct.jpg'
            alt='user'
            fill
          />
        </div>
        Canon EOS M6
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type='text' placeholder='Title' name='title' id='title' />
          <input type='number' placeholder='price' name='price' id='price' />
          <input type='number' placeholder='stock' name='stock' id='stock' />
          <input type='text' placeholder='Blue' name='color' id='color' />
          <input type='text' placeholder='M' name='size' id='size' />

          <select id='cat' name='cat'>
            <option value='general'>Choose a Category</option>
            <option value='Electronics'>Electronics</option>
            <option value='Clothing'>Clothing</option>
            <option value='Books'>Books</option>
          </select>

          <textarea
            name='desc'
            id='desc'
            rows='16'
            placeholder='Description'></textarea>

          <button type='Submit' name='submit'>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
