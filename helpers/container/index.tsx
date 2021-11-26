import React, { Fragment, ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
    children?: ReactNode
    flex: string
}

export const Container = ({ children, flex = 'enable' }: Props) => {
    return (
        <Fragment>
            {flex === 'enable' ? <div className={styles.container__withFlex}>{children}</div> 
            : <div className={styles.container}>{children}</div>}
        </Fragment>
    );
};
