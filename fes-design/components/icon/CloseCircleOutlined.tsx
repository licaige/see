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
            <path d="M512 42.667C771.2 42.667 981.333 252.8 981.333 512S771.2 981.333 512 981.333 42.667 771.2 42.667 512 252.8 42.667 512 42.667zm0 64a405.333 405.333 0 1 0 0 810.666 405.333 405.333 0 0 0 0-810.666zm140.288 243.925 21.12 21.12a17.067 17.067 0 0 1 0 24.15L557.269 512l116.139 116.139a17.067 17.067 0 0 1 0 24.149l-21.12 21.12a17.067 17.067 0 0 1-24.15 0L512 557.269 395.861 673.408a17.067 17.067 0 0 1-24.149 0l-21.12-21.12a17.067 17.067 0 0 1 0-24.15L466.731 512 350.592 395.861a17.067 17.067 0 0 1 0-24.149l21.12-21.12a17.067 17.067 0 0 1 24.15 0L512 466.731l116.139-116.139a17.067 17.067 0 0 1 24.149 0z" />
        </svg>
    </IconWrapper>
);
