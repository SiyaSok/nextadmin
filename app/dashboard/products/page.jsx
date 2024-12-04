/** @format */

import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdDelete, MdViewModule } from "react-icons/md";
import { fetchProducts } from "@/app/lib/data";

const Products = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { products, count } = await fetchProducts(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for products...' />
        <Link href='/dashboard/products/add'>
          <button className={styles.add}>Add</button>
        </Link>
      </div>
      <div className={styles.cardsContainer}>
        {products &&
          products.map((product) => (
            <div key={product._id} className={styles.card}>
              <div
                className={styles.cardImage}
                style={{
                  backgroundImage: `url(${product.img ?? "/noproduct.jpg"})`,
                }}>
                <div className={styles.cardButtons}>
                  <Link href={`/dashboard/products/${product._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      <MdViewModule size={20} />
                    </button>
                  </Link>
                  <Link href='/dashboard/products/add'>
                    <button className={`${styles.button} ${styles.delete}`}>
                      <MdDelete size={20} />
                    </button>
                  </Link>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
                <div className={styles.priceStock}>
                  <span className={styles.price}>R {product.price}</span>
                  <span
                    className={`${styles.stock} ${
                      product.stock > 0 ? styles.inStock : styles.outOfStock
                    }`}>
                    {product.stock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Pagination count={count} />
    </div>
  );
};

export default Products;
