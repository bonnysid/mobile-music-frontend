import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './AddIcon';

export const HomeIcon: FC<IconProps> = (props) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" height={40} width={40} {...props}>
            <Path d="M9.583 32.083h6.209V21.958h8.416v10.125h6.209V16.458L20 8.625 9.583 16.458Zm0 2.084q-.833 0-1.458-.625T7.5 32.083V16.458q0-.5.208-.937.209-.438.625-.729L18.75 6.958q.292-.208.604-.312.313-.104.646-.104t.646.104q.312.104.604.312l10.417 7.834q.416.291.625.729.208.437.208.937v15.625q0 .834-.625 1.459-.625.625-1.458.625h-8.292V24.042h-4.25v10.125ZM20 20.333Z" />
        </Svg>
    )
}
