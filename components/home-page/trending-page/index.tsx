import React from 'react';
import styles from './styles.module.scss';

const Trending = () => {
    return <div>
        {/* <h1 className='product__title'>Productos nuevos</h1> */}
        <div className={styles.product}>
            <header className='product__header'>
                <figure>
                    <img 
                        src='https://assets.spartangeek.com/cc/gabinete-para-pc.jpg' 
                        alt='producto' 
                        className='product__image'
                        />
                </figure>
                <article className={styles.product__description}>
                    <span className={styles.product__description__name}>Gabinete PC</span>
                    <span className={styles.product__description__price}>$799.00 MXN</span>
                </article>
            </header>
            <header className='product__header'>
                <figure>
                    <img 
                        src='https://i.blogs.es/049eb3/razertomahawk/450_1000.jpeg' 
                        alt='producto' 
                        className='product__image'
                        />
                </figure>
                <article className={styles.product__description}>
                    <span className={styles.product__description__name}>Gabinete PC</span>
                    <span className={styles.product__description__price}>$799.00 MXN</span>
                </article>
            </header>
            <header className='product__header'>
                <figure>
                    <img 
                        src='https://i.blogs.es/60a2e2/6/1366_2000.jpg' 
                        alt='producto' 
                        className='product__image'
                        />
                </figure>
                <article className={styles.product__description}>
                    <span className={styles.product__description__name}>Gabinete PC</span>
                    <span className={styles.product__description__price}>$799.00 MXN</span>
                </article>
            </header>
            <header className='product__header'>
                <figure>
                    <img 
                        src='https://tecnobits.net/wp-content/uploads/2020/06/pc-gamer-barato-400-dolares.jpg' 
                        alt='producto' 
                        className='product__image'
                        />
                </figure>
                <article className={styles.product__description}>
                    <span className={styles.product__description__name}>Gabinete PC</span>
                    <span className={styles.product__description__price}>$799.00 MXN</span>
                </article>
            </header>
        </div>
    </div>
}

export default Trending;