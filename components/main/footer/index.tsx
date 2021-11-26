import React from 'react';
import { Container } from '../../../helpers';
import styles from './styles.module.scss';

const Footer = () => {
    return <div>
        <Container flex='disable'>
            <div className={styles.footer}>
                <article>
                    <h2>Sitio desarrollado por Fabrizio Luna</h2>
                    <h3>FabrizioLuna.com.mx</h3>
                </article>
                {/* <article>

                    <h3>Prueba</h3>
                </article> */}
            </div>
        </Container>
    </div>
}

export default Footer;