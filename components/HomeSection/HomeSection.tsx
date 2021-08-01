import React, { ReactElement, ReactNode } from 'react'
import BorderedHeading from '../BorderedHeading/BorderedHeading';

import s from './HomeSection.module.scss';

interface Props {
    children: ReactNode;
    heading: string;
}

export default function HomeSection({children, heading}: Props): ReactElement {
    return (
        <div className={s.homeSection}>
            <BorderedHeading>{heading}</BorderedHeading>
            {children}
        </div>
    )
}
