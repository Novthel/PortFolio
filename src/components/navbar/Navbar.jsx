import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ isScrolling }) {

    const toTop = ()=>{
       window.scroll({top:0, margin:0, behavior:'smooth'}) 
    }


  return (
    <nav className={ `${  styles.navbar } ${ isScrolling > 20 ? styles.scrolling : null }` }>
        <div className={ styles.logo } onClick={ toTop }>
            Novthel
        </div>
    </nav>
  )
}
