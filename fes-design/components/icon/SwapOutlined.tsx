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
            <path d="M906.496 569.472a21.333 21.333 0 0 1 21.333 21.333v21.334a21.333 21.333 0 0 1-21.333 21.333H203.563l189.141 244.267a21.333 21.333 0 0 1-.981 27.306l-2.816 2.603-16.896 13.056a21.333 21.333 0 0 1-29.91-3.84L99.755 603.861a21.333 21.333 0 0 1 16.853-34.389h789.888zm-224.768-458.24 242.347 313.045a21.333 21.333 0 0 1-16.854 34.39h-789.93a21.333 21.333 0 0 1-21.334-21.334V416a21.333 21.333 0 0 1 21.334-21.333h702.933L631.04 150.4a21.333 21.333 0 0 1 1.024-27.307l2.816-2.602 16.853-13.099a21.333 21.333 0 0 1 29.952 3.84z" />
        </svg>
    </IconWrapper>
);
