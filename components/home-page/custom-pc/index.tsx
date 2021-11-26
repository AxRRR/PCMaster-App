import React from 'react';
import styles from './styles.module.scss';

const CustomPC = () => {
    return <div className={styles.configure}>
        <header>
            <figure>
                <img 
                    src='https://blog.soltekonline.com/content/images/2021/02/Best-Custom-PC-Builders.jpg' 
                    alt='imagendeprueba'    
                />
            </figure>
            <article>
                <h1>Configura tu computadora a tus necesidades</h1>
                <span>Elige los componentes de tu computadora a tu gusto con nuestra herramienta que te permite elegir entre muchas opciones de componentes de diferentes marcas.</span>
                <button>Configurar mi PC</button>
            </article>
        </header>
    </div>
}

export default CustomPC;