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
            <path d="M458.453 544.128a21.333 21.333 0 0 1 21.334 21.333v341.163a21.333 21.333 0 0 1-21.334 21.333h-341.12A21.333 21.333 0 0 1 96 906.624V565.461a21.333 21.333 0 0 1 21.333-21.333h341.12zm448.171 0a21.333 21.333 0 0 1 21.333 21.333v341.163a21.333 21.333 0 0 1-21.333 21.333H565.461a21.333 21.333 0 0 1-21.333-21.333V565.461a21.333 21.333 0 0 1 21.333-21.333h341.163zm-490.837 64H160v255.787h255.787V608.128zm448.17 0H608.128v255.787h255.83V608.128zM458.453 96a21.333 21.333 0 0 1 21.334 21.333v341.163a21.333 21.333 0 0 1-21.334 21.333h-341.12A21.333 21.333 0 0 1 96 458.496V117.333A21.333 21.333 0 0 1 117.333 96h341.12zm448.171 0a21.333 21.333 0 0 1 21.333 21.333v341.163a21.333 21.333 0 0 1-21.333 21.333H565.461a21.333 21.333 0 0 1-21.333-21.333V117.333A21.333 21.333 0 0 1 565.461 96h341.163zm-490.837 64H160v255.787h255.787V160zm448.17 0H608.128v255.787h255.83V160z" />
        </svg>
    </IconWrapper>
);