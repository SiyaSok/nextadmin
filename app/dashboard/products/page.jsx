/** @format */

import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdDelete, MdViewAgenda, MdViewModule } from "react-icons/md";

const Products = () => {
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
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  className={styles.productImage}
                  src='/noproduct.jpg'
                  alt='user'
                  width={40}
                  height={40}
                />
                Canon EOS M6
              </div>
            </td>
            <td>Canon EOS M6 with 18-150mm Lens - Silver</td>
            <td>R 7,435</td>
            <td>2.01.2025</td>
            <td>50</td>
            <td>
              <div className={styles.buttons}>
                <Link href='/dashboard/products/8989898989'>
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
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  className={styles.productImage}
                  src='/noproduct.jpg'
                  alt='user'
                  width={40}
                  height={40}
                />
                Bella Casa Sideboard
              </div>
            </td>
            <td>Bella Casa Sideboard 4 Doors White + White Retro Feet</td>
            <td>R 4,750</td>
            <td>2.01.2025</td>
            <td>10</td>
            <td>
              <div className={styles.buttons}>
                <Link href='/dashboard/products/8989898989'>
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
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  className={styles.productImage}
                  src='/noproduct.jpg'
                  alt='user'
                  width={40}
                  height={40}
                />
                Silicone Kitchenware
              </div>
            </td>
            <td>
              Silicone Kitchenware Kit 19 Pieces Knife & Spoon Set With Storage
              Rack
            </td>
            <td>R 286</td>
            <td>2.01.2025</td>
            <td>150</td>
            <td>
              <div className={styles.buttons}>
                <Link href='/dashboard/products/8989898989'>
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
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  className={styles.productImage}
                  src='/noproduct.jpg'
                  alt='user'
                  width={40}
                  height={40}
                />
                Air Fryer
              </div>
            </td>
            <td>
              Bennett Read 9.7L Triple Multi-Zone Air Fryer - Stainless Steel
            </td>
            <td>R 1,949</td>
            <td>2.01.2025</td>
            <td>108</td>
            <td>
              <div className={styles.buttons}>
                <Link href='/dashboard/products/8989898989'>
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
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Products;
