import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

export const Navigation = () => {
    return <div className={styles.navigation}>
        <ul>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Configurar PC</li>
            {/* <li className='navbar--element'><input type='text' className='navbar--search' /></li> */}
        </ul>
        <ul>
            <li><FontAwesomeIcon icon={faUser} /></li>
            <li><FontAwesomeIcon icon={faSearch} /></li>
            <li><FontAwesomeIcon icon={faShoppingCart} /></li>
        </ul>
    </div>
}