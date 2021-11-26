import styles from './styles.module.scss';

const Filter = () => {
    return (
        <section className={styles.filter}>
            <h3>Categorías</h3>
            <ul>
                <li>Accesorios</li>
                <li>Audio</li>
                <li>Almacenamiento</li>
                <li>Componentes</li>
                <li>Monitores</li>
                <li>Energia</li>
            </ul>
        </section>
    )
}

export default Filter;