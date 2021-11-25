import { Fragment, ReactNode } from 'react';
import { Navigation } from '..';


type Props = {
    children?: ReactNode
}

const Layout = ({ children }: Props) => {
    return(
        <Fragment>
            <header>
                <Navigation />
            </header>
            {children}
        </Fragment>
    )
}

export default Layout;