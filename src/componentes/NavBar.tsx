import styles from '../styles/components/navBar.module.css';

export function NavBar(){
   return ( 
        <header className={styles.navBoxContainer}>
            <h3>Egift</h3>
            <h3>Presentes online</h3>
            <ul className={styles.itemList}>
                <li>cosito</li>
                <li>upe</li>
                <li>eita</li>
                <li>opa</li>
                <li>uha</li>
            </ul>
        </header>

   );
}