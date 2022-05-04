import React from 'react';
import styles from './ProyectGrid.module.css';
import cine from '../../media/cine.jpg';
import veterinaria from '../../media/veterinaria.jpg';
import criptomoneda from '../../media/criptomoneda.jpg';

export default function ProyectGrid() {
  return (
    <div className={styles.container}>
        <div className={styles.subTitle} >
          <h3>Mis Proyectos</h3>
        </div>
        <div className={styles.card}>
          <img src={cine} width={300} height={200} alt='cine'/>
          <div className={styles.title}>
            <p>Buscador de Peliculas</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={veterinaria} width={300} height={200} alt='veterinaria'/>
          <div className={styles.title}>
            <p>Citas medicas</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={criptomoneda} width={300} height={200} alt='criptomoneda'/>
          <div className={styles.title}>
            <p>Cotizador de Criptomoneda</p>
          </div>
        </div>
 
        
    </div>
  )
}
