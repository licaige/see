import IconWrapper from './IconWrapper';
import type { IconProps } from './IconWrapper';
import './style';

export default (props?: IconProps) => (
    <IconWrapper {...props}>
        <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
        >
            <path d="M853.248 981.333A21.333 21.333 0 0 0 874.581 960V64a21.333 21.333 0 0 0-21.333-21.333H170.752A21.333 21.333 0 0 0 149.419 64v896a21.333 21.333 0 0 0 21.333 21.333h682.496zm-42.71-63.957h-597.12v-810.71h597.12v810.71zM682.668 405.333A21.333 21.333 0 0 0 704 384v-21.333a21.333 21.333 0 0 0-21.333-21.334H341.333A21.333 21.333 0 0 0 320 362.667V384a21.333 21.333 0 0 0 21.333 21.333h341.334zm0 138.667A21.333 21.333 0 0 0 704 522.667v-21.334A21.333 21.333 0 0 0 682.667 480H341.333A21.333 21.333 0 0 0 320 501.333v21.334A21.333 21.333 0 0 0 341.333 544h341.334zM512 682.667a21.333 21.333 0 0 0 21.333-21.334V640A21.333 21.333 0 0 0 512 618.667H341.333A21.333 21.333 0 0 0 320 640v21.333a21.333 21.333 0 0 0 21.333 21.334H512z" />
        </svg>
    </IconWrapper>
);