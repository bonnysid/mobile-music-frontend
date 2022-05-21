import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './AddIcon';

export const PrevIcon: FC<IconProps> = (props) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" height={40} width={40} {...props}>
            <Path d="m33.542 28.5-10.75-7.333q-.625-.417-.625-1.167t.625-1.167l10.75-7.333q.708-.5 1.437-.104.729.396.729 1.229v14.75q0 .833-.729 1.229-.729.396-1.437-.104Zm-16.709 0-10.75-7.333Q5.417 20.75 5.417 20t.666-1.167l10.75-7.333q.667-.5 1.417-.104t.75 1.229v14.75q0 .833-.75 1.229-.75.396-1.417-.104Z" />
        </Svg>
    )
}
