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
            <path d="M512 42.667c6.016 0 12.032.128 18.005.341L512 42.667a477.312 477.312 0 0 1 78.507 6.528 469.973 469.973 0 0 1 367.317 315.648c3.968 5.333 6.357 11.946 6.357 19.157l-.085 1.536c11.221 40.235 17.237 82.645 17.237 126.464s-5.973 86.23-17.237 126.464a31.872 31.872 0 0 1-6.272 20.693c-58.283 176.555-218.453 306.774-410.88 320.896a538.88 538.88 0 0 1-19.627 1.024 477.056 477.056 0 0 1-33.066-.085l17.749.341a477.312 477.312 0 0 1-78.507-6.528A469.973 469.973 0 0 1 65.152 655.957a31.36 31.36 0 0 1-4.181-13.568A471.595 471.595 0 0 1 42.667 512c0-45.227 6.4-89.003 18.346-130.432L60.885 384c0-5.803 1.536-11.264 4.267-15.957C122.453 189.867 283.435 58.197 477.013 43.947a538.837 538.837 0 0 1 19.542-1.024c5.205-.171 10.325-.256 15.445-.256zm124.16 629.376H387.84c15.787 99.498 45.483 183.978 81.92 243.114a413.141 413.141 0 0 0 84.48 0c36.437-59.136 66.133-143.616 81.92-243.114zm-313.173 0H139.52a406.485 406.485 0 0 0 248.96 226.133c-29.995-63.061-52.736-140.245-65.45-226.133zm561.493 0H701.013c-12.8 85.888-35.456 163.072-65.45 226.133a406.613 406.613 0 0 0 248.96-226.133zM315.605 416H118.101a406.357 406.357 0 0 0-11.434 96c0 33.11 3.968 65.28 11.434 96h197.462a1121.11 1121.11 0 0 1 0-192zm328.619 0H379.819a1048.96 1048.96 0 0 0 0 192.043H644.18a1048.917 1048.917 0 0 0 0-192.043zm261.717 0H708.48a1121.11 1121.11 0 0 1 0 192.043h197.461A406.357 406.357 0 0 0 917.333 512c0-33.067-3.968-65.237-11.434-96zM388.437 125.867l-8.704 2.901A406.57 406.57 0 0 0 139.477 352h183.51c12.714-85.888 35.413-163.115 65.408-226.176zM512 106.667a410.027 410.027 0 0 0-42.24 2.133c-36.437 59.179-66.133 143.659-81.92 243.2h248.32c-15.787-99.541-45.483-184.021-81.92-243.2a412.928 412.928 0 0 0-42.24-2.133zm123.52 19.2 2.133 4.394c28.928 62.251 50.902 137.814 63.318 221.739h183.552A406.485 406.485 0 0 0 635.52 125.867z" />
        </svg>
    </IconWrapper>
);