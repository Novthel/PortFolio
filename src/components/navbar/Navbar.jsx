
import styles from './Navbar.module.css';
import { FcMenu } from "react-icons/fc";

export default function Navbar() {
 
  const show =()=>{

    const item = document.querySelector('ul')
    item.classList.toggle(`${ styles.show }`)
  }


  return (
    <nav className={ styles.navbar }>
        <div className={ styles.logo }>
          Novthel    
        </div>
        <ul className={ styles.itemsMenu }>
          <li> <a href='#inicio' onClick={show}>Home</a></li>
          <li> <a href='#about' onClick={show}>Acerca</a></li>
          <li> <a href='#proyects' onClick={show}>Proyectos</a></li>
          <li> <a href='#footer' onClick={show}>Contacto</a> </li>
        </ul>
        <span className={styles.btnMenu} onClick={show}>
          <FcMenu/>
        </span>
    </nav>
  )
}
