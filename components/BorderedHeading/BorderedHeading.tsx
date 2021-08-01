import { Heading } from '@chakra-ui/react'
import React, { ReactElement, ReactNode } from 'react'

import s from './BorderedHeading.module.scss';

interface Props {
    children: ReactNode;
}

export default function BorderedHeading({ children }: Props): ReactElement {
    return (
        <Heading size="md" className={s.borderedHeading}>{children}</Heading>
    )
}
