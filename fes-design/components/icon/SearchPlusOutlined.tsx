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
            <path d="M480.384 100.95a379.819 379.819 0 0 1 290.219 624.895L915.84 871.083a21.333 21.333 0 0 1 0 30.165l-15.104 15.061a21.333 21.333 0 0 1-30.165 0L725.333 771.072a379.819 379.819 0 1 1-244.992-670.123zm0 64a315.819 315.819 0 1 0 0 631.68 315.819 315.819 0 0 0 0-631.68zm10.667 166.485a21.333 21.333 0 0 1 21.333 21.333v96h96a21.333 21.333 0 0 1 21.333 21.333v21.334a21.333 21.333 0 0 1-21.333 21.333h-96v96a21.333 21.333 0 0 1-21.333 21.333h-21.334a21.333 21.333 0 0 1-21.333-21.333v-96h-96a21.333 21.333 0 0 1-21.333-21.333V470.1a21.333 21.333 0 0 1 21.333-21.333h96v-96a21.333 21.333 0 0 1 21.333-21.333h21.334z" />
        </svg>
    </IconWrapper>
);