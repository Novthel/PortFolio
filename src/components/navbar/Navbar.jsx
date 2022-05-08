
import styles from './Navbar.module.css';
import { FcMenu } from "react-icons/fc";

export default function Navbar() {
 
  const show =()=>{

    const item = document.querySelector('ul')
    item.classList.toggle(`${ styles.show }`)
    console.log(item)
  }


  return (
    <nav className={ styles.navbar }>
        <div className={ styles.logo }>
          Novthel    
        </div>
        <ul className={ styles.itemsMenu }>
          <li> <a href='#inicio'>Home</a></li>
          <li> <a href='#about'>Acerca</a></li>
          <li> <a href='#proyects'>Proyectos</a></li>
          <li> <a href='#footer'>Contacto</a> </li>
        </ul>
        <span className={styles.btnMenu} onClick={show}>
          <FcMenu/>
        </span>
    </nav>
  )
}
