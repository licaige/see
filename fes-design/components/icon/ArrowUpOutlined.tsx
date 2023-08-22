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
            <path d="M496.896 164.48a21.333 21.333 0 0 1 27.221-2.475l2.987 2.475 332.672 332.672a21.333 21.333 0 0 1 2.475 27.221l-2.475 2.987-15.061 15.061a21.333 21.333 0 0 1-27.222 2.475l-2.986-2.475L544 271.915v581.418a21.333 21.333 0 0 1-21.333 21.334h-21.334A21.333 21.333 0 0 1 480 853.333V271.872l-270.507 270.55a21.333 21.333 0 0 1-27.221 2.474l-2.987-2.475-15.061-15.061a21.333 21.333 0 0 1-2.475-27.221l2.475-2.987L496.896 164.48z" />
        </svg>
    </IconWrapper>
);
