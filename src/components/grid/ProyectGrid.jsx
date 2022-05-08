import React from 'react';
import { ExternalLink } from 'react-external-link';
import styles from './ProyectGrid.module.css';
import cine from '../../media/cine.jpg';
import veterinaria from '../../media/veterinaria.jpg';
import criptomoneda from '../../media/criptomoneda.jpg';

export default function ProyectGrid() {
  return (
    <div className={styles.container} id='proyects'>
        <div className={styles.subTitle} >
          <h3>Mis Proyectos</h3>
        </div>

        <div className={styles.card}>
          <ExternalLink href="https://novthel-search-movies.netlify.app/">
            <img src={cine} width={300} height={200} alt='cine'/>
          </ExternalLink>
          <div className={styles.title}>
            <p>Buscador de Peliculas</p>
          </div>
        </div>

        <div className={styles.card}>
          <ExternalLink href="https://novthel-administrador-citas-veterinaria.netlify.app/">
            <img src={veterinaria} width={300} height={200} alt='veterinaria'/>
          </ExternalLink>
          <div className={styles.title}>
            <p>Citas medicas</p>
          </div>
        </div>

        <div className={styles.card}>
          <ExternalLink href="https://novthel-cotizador-criptomonedas.netlify.app/">
            <img src={criptomoneda} width={300} height={200} alt='criptomoneda'/>
          </ExternalLink>
          <div className={styles.title}>
            <p>Cotizador de Criptomoneda</p>
          </div>
        </div>
 
        
    </div>
  )
}
