/** @format */

import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdDelete, MdViewAgenda, MdViewModule } from "react-icons/md";
import { fetchProducts } from "@/app/lib/data";

const Products = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const products = await fetchProducts(q);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for for products...' />
        <Link href='/dashboard/users/add'>
          <button className={styles.add}>Add</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr key={product._id}>
                <td>
                  <div className={styles.product}>
                    <Image
                      className={styles.productImage}
                      src={product.img ?? "/noproduct.jpg"}
                      alt='user'
                      width={40}
                      height={40}
                    />
                    {product.title}
                  </div>
                </td>
                <td>{product.desc}</td>
                <td>R {product.price}</td>
                <td>{product.createdAt?.toString().slice(4, 16)}</td>
                <td>{product.stock}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/products/${product._id}`}>
                      <button
                        className={`
                    ${styles.button}
                    ${styles.view}
                    `}>
                        <MdViewModule size={20} />
                      </button>
                    </Link>
                    <Link href='/dashboard/users/add'>
                      <button
                        className={`
                    ${styles.button}
                    ${styles.delete}
                    `}>
                        <MdDelete size={20} />
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Products;
