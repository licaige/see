import IconWrapper from './IconWrapper';
import type { IconProps } from './IconWrapper';
import './style';

export default (props?: IconProps) => (
    <IconWrapper {...props}>
        <svg
            width="200"
            height="200"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M906.752 810.539a21.333 21.333 0 0 1 21.333 21.333v21.333a21.333 21.333 0 0 1-21.333 21.334H117.419a21.333 21.333 0 0 1-21.334-21.334v-21.333a21.333 21.333 0 0 1 21.334-21.333h789.333zm0-224.512a21.333 21.333 0 0 1 21.333 21.333v21.333a21.333 21.333 0 0 1-21.333 21.334H436.224a21.333 21.333 0 0 1-21.333-21.334V607.36a21.333 21.333 0 0 1 21.333-21.333h470.528zM100.608 390.443a21.333 21.333 0 0 1 26.752-5.675l3.243 2.09 137.77 108.374a21.333 21.333 0 0 1 2.774 30.89l-2.774 2.646L130.56 637.141a21.333 21.333 0 0 1-34.133-12.928l-.384-3.84V403.627a21.333 21.333 0 0 1 4.565-13.227zm806.144-16.47a21.333 21.333 0 0 1 21.333 21.334v21.333a21.333 21.333 0 0 1-21.333 21.333H436.224a21.333 21.333 0 0 1-21.333-21.333v-21.333a21.333 21.333 0 0 1 21.333-21.334h470.528zm0-224.512a21.333 21.333 0 0 1 21.333 21.334v21.333a21.333 21.333 0 0 1-21.333 21.333H117.419a21.333 21.333 0 0 1-21.334-21.333v-21.333a21.333 21.333 0 0 1 21.334-21.334h789.333z" />
        </svg>
    </IconWrapper>
);