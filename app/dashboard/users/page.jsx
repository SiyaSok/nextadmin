/** @format */

import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdDelete, MdViewModule } from "react-icons/md";

const User = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, users } = await fetchUsers(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for a user...' />
        <Link href='/dashboard/users/add'>
          <button className={styles.add}>Add</button>
        </Link>
      </div>
      <div className={styles.cardsContainer}>
        {users &&
          users.map((user) => (
            <div key={user._id} className={styles.card}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${user.img})` }}>
                <div className={styles.cardButtons}>
                  <Link href={`/dashboard/users/${user._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      <MdViewModule size={20} />
                    </button>
                  </Link>
                  <Link href='/dashboard/users/add'>
                    <button className={`${styles.button} ${styles.delete}`}>
                      <MdDelete size={20} />
                    </button>
                  </Link>
                </div>
                <div className={styles.cardOverlay}>
                  <h3>{user.username}</h3>
                  <p>{user.email}</p>
                  <div className={styles.statusContainer}>
                    <span
                      className={`${styles.status} ${
                        user.isAdmin ? styles.admin : styles.user
                      }`}>
                      {user.isAdmin ? "Admin" : "User"}
                    </span>
                    <span
                      className={`${styles.status} ${
                        user.isActive ? styles.active : styles.passive
                      }`}>
                      {user.isActive ? "Active" : "Passive"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Pagination count={count} />
    </div>
  );
};

export default User;
