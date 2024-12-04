/** @format */

import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdDelete, MdViewAgenda, MdViewModule } from "react-icons/md";

const User = async () => {
  const user = await fetchUsers();

  console.log(user);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for a user...' />
        <Link href='/dashboard/users/add'>
          <button className={styles.add}>Add</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {user &&
            user.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className={styles.user}>
                    <Image
                      className={styles.userImage}
                      src={user.img}
                      alt='user'
                      width={40}
                      height={40}
                    />
                    {user.username}
                  </div>
                </td>
                <td> {user.email}</td>
                <td>{user.createdAt?.toString().slice(4, 16)}</td>
                <td> {user.isAdmin ? "Admin" : "User"}</td>
                <td>{user.isActive ? "Active" : "passive"}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${user._id}`}>
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

export default User;
