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
            <path d="M843.861 180.139c183.296 183.296 183.296 480.426 0 663.722s-480.426 183.296-663.722 0-183.296-480.426 0-663.722 480.426-183.296 663.722 0zm-618.496 45.226a405.333 405.333 0 1 0 573.27 573.27 405.333 405.333 0 0 0-573.27-573.27zm297.302 73.302A21.333 21.333 0 0 1 544 320v160h160a21.333 21.333 0 0 1 21.333 21.333v21.334A21.333 21.333 0 0 1 704 544H544v160a21.333 21.333 0 0 1-21.333 21.333h-21.334A21.333 21.333 0 0 1 480 704V544H320a21.333 21.333 0 0 1-21.333-21.333v-21.334A21.333 21.333 0 0 1 320 480h160V320a21.333 21.333 0 0 1 21.333-21.333h21.334z" />
        </svg>
    </IconWrapper>
);
