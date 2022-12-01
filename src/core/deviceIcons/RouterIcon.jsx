const RouterIcon = ({size, status}) => {
    let light = 'mainLight-off'
    switch (status) {
        case 1:
        light = "mainLight-on"
        break;
        case 0:
        light = "mainLight-off"
        break;
        case 2:
        light = "mainLight-work"
    }
    return (
        <svg viewBox="0 0 402 145.7" width={size}>
        <g>
            <g transform="translate(7.2017 262.91)">
                <path fill="#666666" d="M36.3-262.9h314.4l43.6,70.8l-400.8-1.6L36.3-262.9z"/>
            </g>
            <g transform="translate(7.2017 262.91)">
                <path fill="#808080" d="M-0.3-198.7h389c3.6,0,6.5,3.7,6.5,8.2v65.1c0,4.5-2.9,8.2-6.5,8.2h-389c-3.6,0-6.5-3.7-6.5-8.2v-65.1
                    C-6.8-195-3.9-198.7-0.3-198.7"/>
            </g>
            <g transform="translate(1.9684e-8 12.37)">
                <path fill="#333333" d="M14.5,60.2h373.9c2.6,0,4.7,2.9,4.7,6.5l0,0v51.9c0,3.6-2.1,6.5-4.7,6.5l0,0H14.5c-2.6,0-4.7-2.9-4.7-6.5
                    V66.8C9.8,63.1,11.9,60.2,14.5,60.2L14.5,60.2"/>
            </g>
            <g>
                <g>
                    <path fill="#333333" d="M191.8,32.3c-15.1-2-30.2-4.2-45.2-6.2c-0.4,1.8-0.5,2.7-0.9,4.5c-18.6,0-37.2-0.2-55.7-0.2
                        c-0.7,1.5-1.1,2.2-1.8,3.7c19,0,37.9,0.2,56.8,0.2c-0.3,1.7-0.4,2.3-0.8,4C160.1,36.3,176,34.3,191.8,32.3z"/>
                    <path fill="#333333" d="M242.8,30.8c-0.6-1.8-0.9-2.7-1.5-4.5c-14.8,2.2-29.7,4.2-44.5,6c16.1,2.2,32.2,4.2,48.3,6.4
                        c-0.5-1.7-0.7-2.5-1.3-4c19,0,37.9,0.2,56.8,0.2c-0.9-1.5-1.4-2.3-2.3-3.8C279.9,30.8,261.3,30.8,242.8,30.8z"/>
                    <path fill="#333333" d="M185,29.3c6.4,0,9.7,0,16.1,0c-0.5-5.2-0.7-7.7-1.3-12.9c7.3,0,10.9,0,18.2,0C207.4,12,202.3,10,192.8,5.7
                        c-9,4.2-13.8,6.4-24,10.5c6.5,0,9.7,0,16.2,0C184.9,21.6,185,24.1,185,29.3z"/>
                    <path fill="#333333" d="M201.6,34.6c-6.6,0-10,0-16.5,0c0.1,5.2,0.1,7.7,0.1,12.9c-7.6,0-11.4,0-19,0c9.9,3.8,19.8,7.2,29.7,10.7
                        c9.4-3.3,19-6.9,28.4-10.5c-8.6,0-12.8,0-21.4-0.2C202.4,42.3,202.2,39.8,201.6,34.6z"/>
                </g>
            </g>
            <g>
                <polygon fill="#333333" points="46.3,51.8 11.4,51.8 14.9,46.3 48.9,46.3"/>
                <polygon fill="#333333" points="53.8,39.4 19,39.4 22.5,33.9 56.5,33.9"/>
                <polygon fill="#333333" points="61.4,27.1 26.6,27.1 30,21.6 64.1,21.6"/>
                <polygon fill="#333333" points="69,14.7 34.2,14.7 37.6,9.2 71.7,9.2"/>
            </g>
            <g>
                <polygon fill="#333333" points="354.9,51.8 389.7,51.8 386.3,46.3 352.3,46.3"/>
                <polygon fill="#333333" points="347.3,39.4 382.1,39.4 378.7,33.9 344.7,33.9"/>
                <polygon fill="#333333" points="339.7,27.1 374.5,27.1 371.1,21.6 337.1,21.6"/>
                <polygon fill="#333333" points="332.1,14.7 366.9,14.7 363.5,9.2 329.5,9.2"/>
            </g>
            <g>
                <path d="M311.3,132.7h-25.9c-1.9,0-3.5-1.6-3.5-3.5v-27c0-1.9,1.6-3.5,3.5-3.5h25.9c1.9,0,3.5,1.6,3.5,3.5v27
                    C314.8,131.1,313.2,132.7,311.3,132.7z"/>
            </g>
            <g>
                <path d="M358.9,132.7H333c-1.9,0-3.5-1.6-3.5-3.5v-27c0-1.9,1.6-3.5,3.5-3.5h25.9c1.9,0,3.5,1.6,3.5,3.5v27
                    C362.4,131.1,360.8,132.7,358.9,132.7z"/>
            </g>
            <g>
                <path fill="#FFFFFF" d="M292.1,79.6c0,0.7,0,1,0,1h-2v-2h2C292.1,78.6,292.1,78.9,292.1,79.6z M291.9,82.7v9.1h-1.6v-9.1H291.9z"/>
                <path fill="#FFFFFF" d="M297.6,82.7v-2.6c0-0.5,0-0.7,0-0.7c0,0,1,0,3,0c1.9,0,2.9,0,2.9,0c0,0,0,0.4,0,1.2l-1.6,0.8
                    c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0-0.2h-2.7c0,0,0,0.1,0,0.2c0,0.1,0,0.2,0,0.3v1.4h2.7v1.5h-2.7v7.6h-1.6v-7.6h-2.8v-1.5H297.6z"
                    />
                <path fill="#FFFFFF" d="M311.3,79.2c4.5,0,6.7,0,6.8,0s0.1,1.4,0.1,4.2c0,2.8,0,4.2-0.1,4.2c-0.2,0-0.5,0-1.1,0s-1.3,0-2,0l3.9,4.1
                    h-2.4l-3.6-4.1H307v4.1h-1.6V79.2H311.3z M311.3,86.1c3.4,0,5.1,0,5.2,0c0,0,0-0.9,0-2.7c0-1.8,0-2.7,0-2.7s-1.8,0-5.2,0H307v5.5
                    H311.3z"/>
                <path fill="#FFFFFF" d="M333.1,82.8c0,0,0.1,1.5,0.1,4.5c0,3,0,4.5-0.1,4.5s-2.2,0-6.5,0c-4.3,0-6.4,0-6.5,0s-0.1-1.5-0.1-4.5
                    c0-2.9,0-4.4,0.1-4.5s2.2,0,6.5,0C330.9,82.7,333.1,82.7,333.1,82.8z M321.8,84.2c0,0,0,1,0,3c0,2,0,3,0,3c0,0,1.6,0,4.8,0
                    c3.2,0,4.8,0,4.8,0c0,0,0-1,0-3c0-2,0-3,0-3c0,0-1.6,0-4.8,0C323.5,84.2,321.9,84.2,321.8,84.2z"/>
                <path fill="#FFFFFF" d="M345.8,91.8L345.8,91.8c-0.7,0-2,0-4,0c-3.7,0-5.5,0-5.6,0c0,0,0-1.3,0-3.7v-5.3h1.6V88c0,1.5,0,2.2,0,2.3
                    c0,0,1.3,0,3.9,0c2.6,0,3.9,0,3.9,0c0,0,0-0.8,0-2.3v-5.3h1.6v9.1H345.8z"/>
                <path fill="#FFFFFF" d="M352.6,82.7v-3.4h1.7v3.4h3.1v1.5h-3.1v7.6h-1.7v-7.6h-3.1v-1.5H352.6z"/>
                <path fill="#FFFFFF" d="M371.8,91.1c0,0.4,0,0.6,0,0.6c0,0-2.2,0-6.5,0c-4.3,0-6.4,0-6.5,0s-0.1-1.5-0.1-4.5c0-2.9,0-4.4,0.1-4.5
                    s2.2,0,6.5,0c4.3,0,6.4,0,6.5,0s0.1,1.5,0.1,4.5V88h-11.4c0,1.5,0,2.2,0,2.3c0,0,1.6,0,4.8,0c3.2,0,4.8,0,4.8,0c0,0,0-0.2,0-0.5
                    l1.7,0C371.8,90.2,371.8,90.7,371.8,91.1z M370.1,84.2c0,0-1.6,0-4.8,0c-3.2,0-4.8,0-4.8,0c0,0,0,0.8,0,2.3h9.8
                    C370.2,85,370.1,84.2,370.1,84.2z"/>
                <path fill="#FFFFFF" d="M384.1,82.8c0,0-0.2,0.2-0.5,0.4c-0.3,0.2-0.7,0.6-1.2,1.1c-0.1,0-0.2,0-0.4,0c-0.2,0-0.4,0-0.6,0
                    c-0.7,0-1.3,0-1.8,0c-2.5,0-3.7,0-3.7,0c0,0,0,1,0,3v4.6h-1.6v-9.1h1.6v0c0.7,0,1.9,0,3.7,0L384.1,82.8z M384.2,82.8L384.2,82.8
                    C384.1,82.7,384.1,82.7,384.2,82.8z"/>
            </g>
        </g>
        <g>
            {status ?
            <path className={light} d="M51,105c0,5.8-4.7,10.4-10.4,10.4s-10.4-4.7-10.4-10.4c-0.2-5.9,4.4-10.4,10.3-10.4S51,99.2,51,105z"/> :
            <path fill="#FF0000" d="M51,105c0,5.8-4.7,10.4-10.4,10.4s-10.4-4.7-10.4-10.4c-0.2-5.9,4.4-10.4,10.3-10.4S51,99.2,51,105z"/>
            }
        </g>
        </svg>
    )
};

export default RouterIcon;