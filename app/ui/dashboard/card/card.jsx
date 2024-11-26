import styles from './card.module.css';
import {MdSupervisedUserCircle} from 'react-icons/md'
const Card = () => {
    return ( <div className={styles.container}>
    <MdSupervisedUserCircle size={24}/>

<div className={styles.texts}>
    <span className={styles.title}>Total User</span>
    <span className={styles.number}>10.273</span>
    <span className={styles.details}>
    <span className={styles.positive}>12% </span> 
    more then pervious weeks
    </span>
</div>
    </div> );
}
 
export default Card;