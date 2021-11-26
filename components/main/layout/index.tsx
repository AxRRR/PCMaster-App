import { Fragment, ReactNode } from 'react';
import { Navigation } from '..';
import Footer from '../footer';


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
            <footer>
                <Footer />
            </footer>
        </Fragment>
    )
}

export default Layout;