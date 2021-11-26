import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode
}

const Separator = ({ children }: Props) => {
    return <div><h3>{children}</h3><hr></hr></div>
}

export default Separator;
