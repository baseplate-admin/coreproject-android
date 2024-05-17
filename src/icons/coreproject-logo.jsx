import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={28}
        fill="none"
        {...props}
    >
        <Path
            fill="#7569E1"
            fillRule="evenodd"
            d="M8.75 28c4.832 0 8.75-3.89 8.75-8.69 0-4.799-3.918-8.69-8.75-8.69S0 14.512 0 19.31C0 24.11 3.918 28 8.75 28Zm-.002-4.827c2.148 0 3.89-1.73 3.89-3.862 0-2.133-1.742-3.863-3.89-3.863s-3.889 1.73-3.889 3.863 1.741 3.862 3.89 3.862Z"
            clipRule="evenodd"
        />
        <Ellipse cx={8.749} cy={2.897} fill="#DCD9F7" rx={2.917} ry={2.897} />
    </Svg>
);
export default SvgComponent;
