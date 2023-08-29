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
            <path d="m527.104 731.307 233.813-233.814a21.333 21.333 0 0 0 0-30.208l-15.104-15.061a21.333 21.333 0 0 0-27.221-2.475l-2.944 2.475L544 623.914V117.12a21.333 21.333 0 0 0-21.333-21.333h-21.334A21.333 21.333 0 0 0 480 117.12v506.795L308.352 452.224a21.333 21.333 0 0 0-30.165 0l-15.104 15.061a21.333 21.333 0 0 0 0 30.166l233.813 233.813a21.333 21.333 0 0 0 30.208 0zm379.435 196.906a21.333 21.333 0 0 0 20.992-17.493l.341-3.84V645.12a21.333 21.333 0 0 0-17.493-20.992l-3.84-.341h-21.334a21.333 21.333 0 0 0-20.992 17.493l-.341 3.84v219.093H161.28V645.12a21.333 21.333 0 0 0-17.493-20.992l-3.84-.341H117.76a21.333 21.333 0 0 0-20.992 17.493l-.341 3.84v261.76a21.333 21.333 0 0 0 17.493 20.992l3.84.341h788.779z" />
        </svg>
    </IconWrapper>
);