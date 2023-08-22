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
            <path d="M608 917.461a21.333 21.333 0 0 1 21.333 21.334v21.333A21.333 21.333 0 0 1 608 981.461H416a21.333 21.333 0 0 1-21.333-21.333v-21.333A21.333 21.333 0 0 1 416 917.46h192zM522.667 42.795A21.333 21.333 0 0 1 544 64.128v87.04a320 320 0 0 1 288 318.421v340.907h21.333a21.333 21.333 0 0 1 21.334 21.333v21.334a21.333 21.333 0 0 1-21.334 21.333H170.667a21.333 21.333 0 0 1-21.334-21.333v-21.334a21.333 21.333 0 0 1 21.334-21.333H192V469.589a320 320 0 0 1 288-318.421v-87.04a21.333 21.333 0 0 1 21.333-21.333h21.334zM512 213.547a256 256 0 0 0-255.83 246.4l-.17 9.642v340.907h512V469.589A256 256 0 0 0 521.6 213.76l-9.6-.17z" />
        </svg>
    </IconWrapper>
);
