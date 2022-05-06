import React from 'react';
import styles from './About.module.css';
import photo from '../../media/photo1.jpeg';


export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.photoContainer}>
        <img className={styles.photo} src={ photo } alt='foto' size={300} />
      </div>
        
      <div className={styles.description}>
          <h3>Aceca de mi</h3>
          <p>Ingeniero Electrónico y Telecomunicaciones, Desarrollador Frontend, apasionado por el mundo de la tecnología en especial la programación.<br/> 
             Con conocimientos en el desarrollo de páginas web con HTML5, CSS3 y JavaScript así como manejo de lenguajes de programación Java, JavaScript,
             Python, librería ReactJs, base de datos MySQL y MongoDB.<br/> 
             Proactivo y autodidacta con excelente disposición para el aprendizaje y experiencia en trabajo en equipo mediante metodología SCRUM.
          </p>
      </div>
       
    </div>
  )
}
