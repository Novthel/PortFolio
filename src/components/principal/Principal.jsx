import React from 'react';
import programming from '../../media/programming.mp4';
import styles from './Principal.module.css';


export default function Principal() {
  return (
    <div className={styles.principal} id='inicio'>
        <video className={styles.video} src={ programming } autoPlay loop muted />
        <h1>Oscar Novoa Berthel</h1>
        <p>Ing. Electronico  |  Desarrollador Front-end </p>
    </div>
  )
}
