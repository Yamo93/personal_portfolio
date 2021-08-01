import { Icon, useColorMode } from '@chakra-ui/react'
import React, { ReactElement } from 'react'

interface Props {
    
}

export default function MediumIcon(props: Props): ReactElement {
    const { colorMode } = useColorMode()
    const fillColor = colorMode === 'light' ? "#424242" : "#FFFFFF"
    return (
        <Icon
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width={48}
          height={48}
          {...props}
        >
          <circle cx={14} cy={24} r={12} fill={fillColor} />
          <ellipse cx={34} cy={24} fill={fillColor} rx={6} ry={11} />
          <ellipse cx={44} cy={24} fill={fillColor} rx={2} ry={10} />
        </Icon>
      )
}
