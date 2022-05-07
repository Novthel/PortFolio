import React from 'react'
import styles from './Footer.module.css';
import { ImLocation } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";

export default function Footer() {
  return (

    <footer className={styles.footer}>
      
      <div className={styles.info}>
        <h1><ImLocation/></h1>
        <p>Barranquilla - Atlantico</p>
      </div>
      
      <div className={styles.contact}>
        <h4>Contacto:</h4>
        <p className= {styles.icon}><IoIosMail/></p>
        <p>Novthel@live.com </p>
        <p className= {styles.icon}><IoMdPhonePortrait/></p>
        <p> 302-2865409 </p>
      </div>

      <div className={styles.redes}>
          <a href="https://www.linkedin.com/in/oscarnovoaberthel/" target="_blank" rel="noopener noreferrer">
            <IoLogoLinkedin/>
          </a>
          <a href="https://github.com/Novthel" target="_blank" rel="noopener noreferrer">
            <IoLogoGithub/>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
      </div>
    </footer>
  )
}
