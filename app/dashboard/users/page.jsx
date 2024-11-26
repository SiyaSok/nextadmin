
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/search/search';
import styles from '@/app/ui/dashboard/users/users.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { MdDelete, MdViewAgenda, MdViewModule } from 'react-icons/md';

const User = () => {
    return ( 
    <div className={styles.container}>
        <div className={styles.top}>
        <Search placeholder="Search for a user..."/>
        <Link href="/dashboard/users/add">
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
                <tr>
                    <td>
                     <div className={styles.user}>
                    <Image 
                    className={styles.userImage} 
                    src="/noavatar.png" 
                    alt="user" 
                    width={40}
                     height={40} 
                     />
                      Jimmy Baker
                    </div>
                    </td>
                    <td>JimmyBaker@info.gov
                    </td>
                    <td>2.01.2025</td>
                    <td>Admin</td>
                    <td>active</td>
                    <td>
              <div className={styles.buttons}>
                      <Link href="/dashboard/users/add">
                    <button 
                    className={`
                    ${styles.button}
                    ${styles.view}
                    `
                    }><MdViewModule size={20}/></button>
                     </Link>
                      <Link href="/dashboard/users/add">
                    <button 
                    className={`
                    ${styles.button}
                    ${styles.delete}
                    `
                    }><MdDelete size={20}/></button>
                     </Link>
              </div>
        
                    </td>
                </tr>
                 <tr>
                    <td>
                     <div className={styles.user}>
                    <Image 
                    className={styles.userImage} 
                    src="/noavatar.png" 
                    alt="user" 
                    width={40}
                     height={40} 
                     />
                      Jimmy Baker
                    </div>
                    </td>
                    <td>JimmyBaker@info.gov
                    </td>
                    <td>2.01.2025</td>
                    <td>Admin</td>
                    <td>active</td>
                    <td>
              <div className={styles.buttons}>
                      <Link href="/dashboard/users/add">
                    <button 
                    className={`
                    ${styles.button}
                    ${styles.view}
                    `
                    }><MdViewModule size={20}/></button>
                     </Link>
                      <Link href="/dashboard/users/add">
                    <button 
                    className={`
                    ${styles.button}
                    ${styles.delete}
                    `
                    }><MdDelete size={20}/></button>
                     </Link>
              </div>
        
                    </td>
                </tr>
            </tbody>

        </table>
        <Pagination/>
   
    </div> 
    )
}
 
export default User;