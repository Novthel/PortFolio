import React from 'react';
import programming from '../../media/programming.jpg';
import styles from './Principal.module.css';
import { IoDownloadOutline } from "react-icons/io5";
import pdf from '../../pdfDownload/pdf.pdf';

export default function Principal() {

  let iconStyles = { color: "white", fontSize: "1.5em" };

  return (
    <div className={styles.principal} id='inicio'>
        <img className={styles.image} src={ programming } alt='programador' />
        <h1>Oscar Novoa Berthel</h1>
        <p>Ing. Electronico  |  Desarrollador Front-end </p>
        <p className={styles.enlace}>
          <a href={pdf} target="_blank" rel="noopener noreferrer" download="CV.Oscar_Novoa.pdf"> 
            <IoDownloadOutline  style={iconStyles}/>
          </a>
        </p>
        <p className={styles.download}>Descargar Curriculum Vitae</p>
    </div>
  )
}
