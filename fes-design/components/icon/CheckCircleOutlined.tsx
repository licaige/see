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
            <path d="M512 42.667C771.2 42.667 981.333 252.8 981.333 512S771.2 981.333 512 981.333 42.667 771.2 42.667 512 252.8 42.667 512 42.667zm0 64a405.333 405.333 0 1 0 0 810.666 405.333 405.333 0 0 0 0-810.666zm180.821 201.472 3.243 2.09 16.853 13.056a21.333 21.333 0 0 1 3.755 29.952l-253.91 327.168a21.333 21.333 0 0 1-33.706 0L307.328 523.477a21.333 21.333 0 0 1 3.797-29.952l16.854-13.056a21.333 21.333 0 0 1 29.909 3.798l88.064 113.45 220.16-283.733a21.333 21.333 0 0 1 26.71-5.845z" />
        </svg>
    </IconWrapper>
);
