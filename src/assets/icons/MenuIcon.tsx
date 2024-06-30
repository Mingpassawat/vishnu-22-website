import { usePathname } from "next/navigation";

export const MenuIcon = ({scale}:{scale?:number}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={scale ? scale*100 : 100} height={scale ? scale*100 : 100} viewBox="0 0 32 32" strokeWidth={3}>
            <path d="M 4 7 L 4 9 L 28 9 L 28 7 L 4 7 z M 4 15 L 4 17 L 28 17 L 28 15 L 4 15 z M 4 23 L 4 25 L 28 25 L 28 23 L 4 23 z"></path>
        </svg>
    )
}

export const HomePageIcon = () => {
    const color: string = IsUrl("home") ? "#2A334E" : "#CFCFCF";
    return (
        <svg
            width="38"
            height="54"
            viewBox="0 0 38 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7 31.5V13.5L19 4.5L31 13.5V31.5H22V21H16V31.5H7Z"
                fill={color}
            />
            <path
                d="M7.22656 41.2344V43.125H2.5625V41.2344H7.22656ZM3.21094 36.625V48H0.921875V36.625H3.21094ZM8.88281 36.625V48H6.61719V36.625H8.88281ZM10.3906 44.0625V43.4922C10.3906 42.8307 10.4688 42.2448 10.625 41.7344C10.7865 41.224 11.0156 40.7969 11.3125 40.4531C11.6094 40.1042 11.9661 39.8411 12.3828 39.6641C12.8047 39.4818 13.276 39.3906 13.7969 39.3906C14.3229 39.3906 14.7943 39.4818 15.2109 39.6641C15.6328 39.8411 15.9922 40.1042 16.2891 40.4531C16.5911 40.7969 16.8229 41.224 16.9844 41.7344C17.1458 42.2448 17.2266 42.8307 17.2266 43.4922V44.0625C17.2266 44.7188 17.1458 45.3021 16.9844 45.8125C16.8229 46.3229 16.5911 46.7526 16.2891 47.1016C15.9922 47.4505 15.6354 47.7135 15.2188 47.8906C14.8021 48.0677 14.3333 48.1562 13.8125 48.1562C13.2917 48.1562 12.8203 48.0677 12.3984 47.8906C11.9818 47.7135 11.6224 47.4505 11.3203 47.1016C11.0182 46.7526 10.7865 46.3229 10.625 45.8125C10.4688 45.3021 10.3906 44.7188 10.3906 44.0625ZM12.5781 43.4922V44.0625C12.5781 44.4531 12.6042 44.7917 12.6562 45.0781C12.7135 45.3646 12.7943 45.6016 12.8984 45.7891C13.0078 45.9766 13.138 46.1146 13.2891 46.2031C13.4401 46.2917 13.6146 46.3359 13.8125 46.3359C14.0104 46.3359 14.1875 46.2917 14.3438 46.2031C14.5 46.1146 14.6276 45.9766 14.7266 45.7891C14.8307 45.6016 14.9062 45.3646 14.9531 45.0781C15.0052 44.7917 15.0312 44.4531 15.0312 44.0625V43.4922C15.0312 43.112 15.0026 42.7786 14.9453 42.4922C14.888 42.2005 14.8073 41.9635 14.7031 41.7812C14.599 41.5938 14.4688 41.4531 14.3125 41.3594C14.1615 41.2604 13.9896 41.2109 13.7969 41.2109C13.6042 41.2109 13.4323 41.2604 13.2812 41.3594C13.1354 41.4531 13.0078 41.5938 12.8984 41.7812C12.7943 41.9635 12.7135 42.2005 12.6562 42.4922C12.6042 42.7786 12.5781 43.112 12.5781 43.4922ZM20.8125 41.2969V48H18.6172V39.5469H20.6797L20.8125 41.2969ZM20.5 43.4844L19.8984 43.5C19.888 42.9062 19.9401 42.3594 20.0547 41.8594C20.1693 41.3594 20.3411 40.9245 20.5703 40.5547C20.8047 40.1849 21.099 39.8984 21.4531 39.6953C21.8073 39.4922 22.2214 39.3906 22.6953 39.3906C23.0026 39.3906 23.2865 39.4479 23.5469 39.5625C23.8073 39.6719 24.0339 39.8464 24.2266 40.0859C24.4193 40.3203 24.5677 40.6276 24.6719 41.0078C24.776 41.3828 24.8281 41.8333 24.8281 42.3594V48H22.6406V42.625C22.6406 42.25 22.6042 41.9635 22.5312 41.7656C22.4583 41.5625 22.3542 41.4219 22.2188 41.3438C22.0833 41.2604 21.9167 41.2188 21.7188 41.2188C21.5104 41.2188 21.3281 41.276 21.1719 41.3906C21.0156 41.5052 20.888 41.6667 20.7891 41.875C20.6953 42.0781 20.6224 42.3177 20.5703 42.5938C20.5234 42.8698 20.5 43.1667 20.5 43.4844ZM24.6172 43.2656L23.8281 43.3672C23.8177 42.8099 23.8672 42.2917 23.9766 41.8125C24.0859 41.3281 24.2552 40.9062 24.4844 40.5469C24.7135 40.1823 25 39.8984 25.3438 39.6953C25.6927 39.4922 26.0964 39.3906 26.5547 39.3906C26.8984 39.3906 27.2109 39.4479 27.4922 39.5625C27.7734 39.6771 28.013 39.862 28.2109 40.1172C28.4141 40.3672 28.5677 40.6979 28.6719 41.1094C28.7812 41.5208 28.8359 42.0208 28.8359 42.6094V48H26.6406V42.6172C26.6406 42.237 26.6042 41.9453 26.5312 41.7422C26.4583 41.5391 26.3542 41.401 26.2188 41.3281C26.0833 41.2552 25.9219 41.2188 25.7344 41.2188C25.5469 41.2188 25.3828 41.2708 25.2422 41.375C25.1068 41.4792 24.9922 41.625 24.8984 41.8125C24.8047 41.9948 24.7344 42.2109 24.6875 42.4609C24.6406 42.7057 24.6172 42.974 24.6172 43.2656ZM33.8906 48.1562C33.3125 48.1562 32.7995 48.0677 32.3516 47.8906C31.9089 47.7135 31.5339 47.4583 31.2266 47.125C30.9193 46.7865 30.6849 46.3776 30.5234 45.8984C30.362 45.4193 30.2812 44.8724 30.2812 44.2578V43.5625C30.2812 42.875 30.3594 42.2734 30.5156 41.7578C30.6719 41.237 30.8932 40.7995 31.1797 40.4453C31.4661 40.0911 31.8177 39.8281 32.2344 39.6562C32.6562 39.4792 33.1328 39.3906 33.6641 39.3906C34.1953 39.3906 34.6615 39.4792 35.0625 39.6562C35.4688 39.8281 35.8047 40.0885 36.0703 40.4375C36.3359 40.7812 36.5365 41.2083 36.6719 41.7188C36.8073 42.2292 36.875 42.8229 36.875 43.5V44.5H31.2109V42.9609H34.7266V42.7656C34.7266 42.4219 34.6901 42.1354 34.6172 41.9062C34.5443 41.6719 34.4297 41.4974 34.2734 41.3828C34.1172 41.2682 33.9089 41.2109 33.6484 41.2109C33.4297 41.2109 33.2448 41.2552 33.0938 41.3438C32.9427 41.4323 32.8229 41.5703 32.7344 41.7578C32.6458 41.9453 32.5807 42.1901 32.5391 42.4922C32.4974 42.7891 32.4766 43.1458 32.4766 43.5625V44.2578C32.4766 44.6484 32.5104 44.9766 32.5781 45.2422C32.6458 45.5026 32.7448 45.7161 32.875 45.8828C33.0104 46.0443 33.1745 46.1615 33.3672 46.2344C33.5599 46.3021 33.7839 46.3359 34.0391 46.3359C34.4245 46.3359 34.7708 46.2682 35.0781 46.1328C35.3906 45.9922 35.6562 45.8021 35.875 45.5625L36.75 46.8906C36.599 47.0885 36.3906 47.2865 36.125 47.4844C35.8594 47.6823 35.5417 47.8438 35.1719 47.9688C34.8021 48.0938 34.375 48.1562 33.8906 48.1562Z"
                fill={color}
            />
        </svg>
    );
};

export const StampbookPageIcon = () => {
    const color: string = IsUrl("stampbook") ? "#2A334E" : "#CFCFCF";
    return (
        <svg
            width="41"
            height="54"
            viewBox="0 0 41 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.73438 45.0078C5.73438 44.8047 5.71615 44.6198 5.67969 44.4531C5.64323 44.2865 5.5651 44.1328 5.44531 43.9922C5.33073 43.8516 5.16146 43.7109 4.9375 43.5703C4.71875 43.4297 4.43229 43.2839 4.07812 43.1328C3.65625 42.9557 3.2474 42.7682 2.85156 42.5703C2.45573 42.3672 2.09896 42.1328 1.78125 41.8672C1.46354 41.6016 1.21094 41.2891 1.02344 40.9297C0.841146 40.5651 0.75 40.138 0.75 39.6484C0.75 39.1693 0.835938 38.7344 1.00781 38.3438C1.1849 37.9531 1.4349 37.6198 1.75781 37.3438C2.08073 37.0625 2.45833 36.8464 2.89062 36.6953C3.32812 36.5443 3.8151 36.4688 4.35156 36.4688C5.08073 36.4688 5.71094 36.6198 6.24219 36.9219C6.77865 37.224 7.19271 37.638 7.48438 38.1641C7.78125 38.6901 7.92969 39.2943 7.92969 39.9766H5.64844C5.64844 39.6536 5.60156 39.3698 5.50781 39.125C5.41927 38.875 5.27604 38.6797 5.07812 38.5391C4.88021 38.3984 4.625 38.3281 4.3125 38.3281C4.02083 38.3281 3.77865 38.388 3.58594 38.5078C3.39844 38.6224 3.25781 38.7812 3.16406 38.9844C3.07552 39.1823 3.03125 39.4062 3.03125 39.6562C3.03125 39.8438 3.07552 40.013 3.16406 40.1641C3.25781 40.3099 3.38542 40.4427 3.54688 40.5625C3.70833 40.6771 3.89844 40.7891 4.11719 40.8984C4.34115 41.0078 4.58594 41.1146 4.85156 41.2188C5.36719 41.4219 5.82292 41.6458 6.21875 41.8906C6.61458 42.1302 6.94531 42.401 7.21094 42.7031C7.47656 43 7.67708 43.3359 7.8125 43.7109C7.94792 44.0859 8.01562 44.513 8.01562 44.9922C8.01562 45.4661 7.93229 45.8984 7.76562 46.2891C7.60417 46.6745 7.36719 47.0078 7.05469 47.2891C6.74219 47.5651 6.36458 47.7786 5.92188 47.9297C5.48438 48.0807 4.99479 48.1562 4.45312 48.1562C3.92708 48.1562 3.42969 48.0833 2.96094 47.9375C2.49219 47.7865 2.07812 47.5599 1.71875 47.2578C1.36458 46.9505 1.08594 46.5625 0.882812 46.0938C0.679688 45.6198 0.578125 45.0599 0.578125 44.4141H2.86719C2.86719 44.7578 2.90104 45.0521 2.96875 45.2969C3.03646 45.5365 3.14062 45.7292 3.28125 45.875C3.42188 46.0156 3.59375 46.1224 3.79688 46.1953C4.00521 46.263 4.24219 46.2969 4.50781 46.2969C4.8099 46.2969 5.04948 46.2396 5.22656 46.125C5.40885 46.0104 5.53906 45.8568 5.61719 45.6641C5.69531 45.4714 5.73438 45.2526 5.73438 45.0078ZM13.1406 39.5469V41.1953H8.82812V39.5469H13.1406ZM9.82031 37.4609H12V45.4219C12 45.6562 12.0234 45.8359 12.0703 45.9609C12.1172 46.0859 12.1875 46.1745 12.2812 46.2266C12.3802 46.2734 12.5104 46.2969 12.6719 46.2969C12.7812 46.2969 12.8828 46.2917 12.9766 46.2812C13.0703 46.2656 13.1406 46.25 13.1875 46.2344V47.9453C13.0156 48.013 12.8333 48.0651 12.6406 48.1016C12.4531 48.138 12.2292 48.1562 11.9688 48.1562C11.5312 48.1562 11.151 48.0729 10.8281 47.9062C10.5104 47.7396 10.263 47.474 10.0859 47.1094C9.90885 46.7396 9.82031 46.2552 9.82031 45.6562V37.4609ZM18.0859 46.0547V42.1484C18.0859 41.8932 18.0547 41.6901 17.9922 41.5391C17.9349 41.388 17.8464 41.2786 17.7266 41.2109C17.612 41.138 17.4714 41.1016 17.3047 41.1016C17.1172 41.1016 16.9609 41.1406 16.8359 41.2188C16.7109 41.2969 16.6172 41.4089 16.5547 41.5547C16.4974 41.7005 16.4688 41.875 16.4688 42.0781H14.2734C14.2734 41.7135 14.3438 41.3698 14.4844 41.0469C14.625 40.7188 14.8307 40.4323 15.1016 40.1875C15.3776 39.9375 15.7057 39.7422 16.0859 39.6016C16.4661 39.4609 16.8932 39.3906 17.3672 39.3906C17.9297 39.3906 18.4297 39.487 18.8672 39.6797C19.3047 39.8672 19.651 40.1667 19.9062 40.5781C20.1615 40.9896 20.2891 41.5234 20.2891 42.1797V45.9453C20.2891 46.4193 20.3125 46.8047 20.3594 47.1016C20.4115 47.3984 20.487 47.6536 20.5859 47.8672V48H18.3828C18.2839 47.7656 18.2083 47.474 18.1562 47.125C18.1094 46.7708 18.0859 46.4141 18.0859 46.0547ZM18.3516 42.8359L18.3594 44.1484H17.5547C17.3464 44.1484 17.1641 44.1823 17.0078 44.25C16.8568 44.3177 16.7292 44.4141 16.625 44.5391C16.5208 44.6589 16.4427 44.7995 16.3906 44.9609C16.3438 45.1224 16.3203 45.2943 16.3203 45.4766C16.3203 45.6797 16.349 45.8516 16.4062 45.9922C16.4635 46.1328 16.5495 46.2396 16.6641 46.3125C16.7786 46.3854 16.9141 46.4219 17.0703 46.4219C17.3099 46.4219 17.5182 46.3724 17.6953 46.2734C17.8724 46.1745 18.0026 46.0547 18.0859 45.9141C18.1745 45.7734 18.2031 45.6432 18.1719 45.5234L18.6719 46.375C18.6094 46.5677 18.5234 46.7682 18.4141 46.9766C18.3099 47.1849 18.1771 47.3776 18.0156 47.5547C17.8542 47.7318 17.6536 47.8776 17.4141 47.9922C17.1797 48.1016 16.901 48.1562 16.5781 48.1562C16.125 48.1562 15.7109 48.0521 15.3359 47.8438C14.9609 47.6354 14.6641 47.3438 14.4453 46.9688C14.2318 46.5938 14.125 46.1484 14.125 45.6328C14.125 45.2057 14.1927 44.8203 14.3281 44.4766C14.4688 44.1276 14.6771 43.8333 14.9531 43.5938C15.2292 43.349 15.5781 43.1615 16 43.0312C16.4219 42.901 16.9167 42.8359 17.4844 42.8359H18.3516ZM24.1094 41.2969V48H21.9141V39.5469H23.9766L24.1094 41.2969ZM23.7969 43.4844L23.1953 43.5C23.1849 42.9062 23.237 42.3594 23.3516 41.8594C23.4661 41.3594 23.638 40.9245 23.8672 40.5547C24.1016 40.1849 24.3958 39.8984 24.75 39.6953C25.1042 39.4922 25.5182 39.3906 25.9922 39.3906C26.2995 39.3906 26.5833 39.4479 26.8438 39.5625C27.1042 39.6719 27.3307 39.8464 27.5234 40.0859C27.7161 40.3203 27.8646 40.6276 27.9688 41.0078C28.0729 41.3828 28.125 41.8333 28.125 42.3594V48H25.9375V42.625C25.9375 42.25 25.901 41.9635 25.8281 41.7656C25.7552 41.5625 25.651 41.4219 25.5156 41.3438C25.3802 41.2604 25.2135 41.2188 25.0156 41.2188C24.8073 41.2188 24.625 41.276 24.4688 41.3906C24.3125 41.5052 24.1849 41.6667 24.0859 41.875C23.9922 42.0781 23.9193 42.3177 23.8672 42.5938C23.8203 42.8698 23.7969 43.1667 23.7969 43.4844ZM27.9141 43.2656L27.125 43.3672C27.1146 42.8099 27.1641 42.2917 27.2734 41.8125C27.3828 41.3281 27.5521 40.9062 27.7812 40.5469C28.0104 40.1823 28.2969 39.8984 28.6406 39.6953C28.9896 39.4922 29.3932 39.3906 29.8516 39.3906C30.1953 39.3906 30.5078 39.4479 30.7891 39.5625C31.0703 39.6771 31.3099 39.862 31.5078 40.1172C31.7109 40.3672 31.8646 40.6979 31.9688 41.1094C32.0781 41.5208 32.1328 42.0208 32.1328 42.6094V48H29.9375V42.6172C29.9375 42.237 29.901 41.9453 29.8281 41.7422C29.7552 41.5391 29.651 41.401 29.5156 41.3281C29.3802 41.2552 29.2188 41.2188 29.0312 41.2188C28.8438 41.2188 28.6797 41.2708 28.5391 41.375C28.4036 41.4792 28.2891 41.625 28.1953 41.8125C28.1016 41.9948 28.0312 42.2109 27.9844 42.4609C27.9375 42.7057 27.9141 42.974 27.9141 43.2656ZM35.9688 41.1719V51.25H33.7891V39.5469H35.8047L35.9688 41.1719ZM40.3594 43.4844V44.0469C40.3594 44.7083 40.3021 45.2943 40.1875 45.8047C40.0729 46.3099 39.901 46.7396 39.6719 47.0938C39.4479 47.4427 39.1667 47.7083 38.8281 47.8906C38.4896 48.0677 38.0938 48.1562 37.6406 48.1562C37.2188 48.1562 36.8542 48.0573 36.5469 47.8594C36.2448 47.6562 35.9896 47.3776 35.7812 47.0234C35.5729 46.6693 35.4062 46.2552 35.2812 45.7812C35.1562 45.3073 35.0599 44.7995 34.9922 44.2578V43.3828C35.0547 42.8047 35.1458 42.2734 35.2656 41.7891C35.3854 41.2995 35.5495 40.875 35.7578 40.5156C35.9714 40.1562 36.2292 39.8802 36.5312 39.6875C36.8385 39.4896 37.2031 39.3906 37.625 39.3906C38.0833 39.3906 38.4818 39.474 38.8203 39.6406C39.1641 39.8073 39.4479 40.0599 39.6719 40.3984C39.901 40.7318 40.0729 41.1562 40.1875 41.6719C40.3021 42.1875 40.3594 42.7917 40.3594 43.4844ZM38.1719 44.0469V43.4844C38.1719 43.0781 38.1484 42.7318 38.1016 42.4453C38.0599 42.1589 37.9922 41.9245 37.8984 41.7422C37.8047 41.5599 37.6823 41.4271 37.5312 41.3438C37.3802 41.2604 37.1953 41.2188 36.9766 41.2188C36.763 41.2188 36.5755 41.2604 36.4141 41.3438C36.2578 41.4271 36.1302 41.5495 36.0312 41.7109C35.9323 41.8672 35.8568 42.0599 35.8047 42.2891C35.7526 42.513 35.724 42.7682 35.7188 43.0547V44.5859C35.7292 44.9245 35.7734 45.224 35.8516 45.4844C35.9349 45.7448 36.0677 45.9531 36.25 46.1094C36.4323 46.2604 36.6797 46.3359 36.9922 46.3359C37.2161 46.3359 37.401 46.2891 37.5469 46.1953C37.6979 46.1016 37.8203 45.9609 37.9141 45.7734C38.0078 45.5859 38.0729 45.349 38.1094 45.0625C38.151 44.776 38.1719 44.4375 38.1719 44.0469Z"
                fill={color}
            />
            <path
                d="M5.83614 4.83614C10.3169 0.355402 17.5816 0.355402 22.0622 4.83614C26.1627 8.93662 26.5098 15.3682 23.1052 19.8644L24.8713 21.6305L22.6304 23.8713L20.8644 22.1053C16.3682 25.5099 9.93656 25.1628 5.83607 21.0623C1.35541 16.5815 1.35541 9.31687 5.83614 4.83614Z"
                fill={color}
            />
            <path
                d="M13.9493 22.3063C19.1169 22.3063 23.3061 18.1171 23.3061 12.9495C23.3061 7.78194 19.1169 3.59277 13.9493 3.59277C8.7817 3.59277 4.59253 7.78194 4.59253 12.9495C4.59253 18.1171 8.7817 22.3063 13.9493 22.3063Z"
                fill="#E1E1E1"
            />
            <path
                d="M7.63922 18.5077C11.2933 22.1618 17.2177 22.1618 20.8717 18.5077C21.8823 17.4971 22.6121 16.3125 23.0636 15.0506C22.6945 16.7401 21.8558 18.3475 20.5422 19.6611C16.8881 23.3151 10.9637 23.3151 7.30967 19.6611C4.6662 17.0176 3.9365 13.1864 5.11775 9.88574C4.46004 12.8958 5.29873 16.1672 7.63922 18.5077Z"
                fill="#949494"
            />
            <path
                d="M34.3526 33.3531C35.4272 32.2786 35.8383 30.9313 35.2662 30.3592L25.2777 21.1887C24.7056 20.6165 23.7673 20.6187 22.6928 21.6933C21.6182 22.7679 21.6161 23.7062 22.1881 24.2783L31.3586 34.2666C31.9308 34.8388 33.278 34.4277 34.3526 33.3531Z"
                fill={color}
            />
            <path
                d="M33.2619 28.5188L29.5185 32.2621L25.0027 27.3435L28.3433 24.0029L33.2619 28.5188Z"
                fill={color}
            />
        </svg>
    );
};

export const ClubPageIcon = () => {
    const color: string = IsUrl("club") ? "#2A334E" : "#CFCFCF";
    return (
        <svg
            width="36"
            height="54"
            viewBox="0 0 36 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.34375 44.2109H11.6172C11.5859 45.0651 11.4141 45.7865 11.1016 46.375C10.7891 46.9583 10.3438 47.401 9.76562 47.7031C9.19271 48.0052 8.5 48.1562 7.6875 48.1562C7.05729 48.1562 6.4974 48.0521 6.00781 47.8438C5.51823 47.6302 5.10156 47.3177 4.75781 46.9062C4.41406 46.4948 4.15365 45.987 3.97656 45.3828C3.80469 44.7734 3.71875 44.0729 3.71875 43.2812V41.3516C3.71875 40.5599 3.8099 39.8594 3.99219 39.25C4.17969 38.6406 4.44531 38.1302 4.78906 37.7188C5.13802 37.3021 5.55729 36.9896 6.04688 36.7812C6.54167 36.5677 7.09896 36.4609 7.71875 36.4609C8.54688 36.4609 9.23958 36.6172 9.79688 36.9297C10.3542 37.2422 10.7839 37.6979 11.0859 38.2969C11.3932 38.8906 11.5781 39.6172 11.6406 40.4766H9.35938C9.34375 39.9349 9.28125 39.5104 9.17188 39.2031C9.06771 38.8906 8.90104 38.6719 8.67188 38.5469C8.44271 38.4167 8.125 38.3516 7.71875 38.3516C7.41667 38.3516 7.15625 38.4062 6.9375 38.5156C6.71875 38.6198 6.53906 38.7891 6.39844 39.0234C6.25781 39.2578 6.15365 39.5651 6.08594 39.9453C6.02344 40.3255 5.99219 40.7891 5.99219 41.3359V43.2812C5.99219 43.8177 6.02083 44.276 6.07812 44.6562C6.13542 45.0312 6.22656 45.3385 6.35156 45.5781C6.47656 45.8177 6.64583 45.9922 6.85938 46.1016C7.07812 46.2109 7.35417 46.2656 7.6875 46.2656C8.07292 46.2656 8.38281 46.2083 8.61719 46.0938C8.85677 45.9792 9.03385 45.7734 9.14844 45.4766C9.26302 45.1797 9.32812 44.7578 9.34375 44.2109ZM15.2344 36V48H13.0391V36H15.2344ZM21.0547 45.9688V39.5469H23.25V48H21.1875L21.0547 45.9688ZM21.3047 44.2266L21.9141 44.2109C21.9141 44.7786 21.8594 45.3047 21.75 45.7891C21.6406 46.2682 21.4766 46.6849 21.2578 47.0391C21.0391 47.3932 20.7656 47.6693 20.4375 47.8672C20.1094 48.0599 19.7214 48.1562 19.2734 48.1562C18.9297 48.1562 18.612 48.099 18.3203 47.9844C18.0339 47.8646 17.7865 47.6797 17.5781 47.4297C17.3698 47.1745 17.2057 46.849 17.0859 46.4531C16.9714 46.0521 16.9141 45.5703 16.9141 45.0078V39.5469H19.1094V45.0312C19.1094 45.2604 19.1302 45.4583 19.1719 45.625C19.2135 45.7865 19.2708 45.9193 19.3438 46.0234C19.4167 46.1276 19.5026 46.2031 19.6016 46.25C19.7005 46.2917 19.8125 46.3125 19.9375 46.3125C20.2812 46.3125 20.5521 46.224 20.75 46.0469C20.9531 45.8646 21.0964 45.6172 21.1797 45.3047C21.263 44.987 21.3047 44.6276 21.3047 44.2266ZM24.8516 36H27.0312V46.0391L26.875 48H24.8516V36ZM31.4219 43.4922V44.0469C31.4219 44.7344 31.3672 45.3333 31.2578 45.8438C31.1536 46.3542 30.9896 46.7812 30.7656 47.125C30.5469 47.4688 30.2656 47.7266 29.9219 47.8984C29.5781 48.0703 29.1719 48.1562 28.7031 48.1562C28.2812 48.1562 27.9193 48.0573 27.6172 47.8594C27.3151 47.6562 27.0599 47.3776 26.8516 47.0234C26.6484 46.6641 26.4818 46.2448 26.3516 45.7656C26.2266 45.2812 26.1354 44.7526 26.0781 44.1797V43.3594C26.1302 42.7969 26.2188 42.2734 26.3438 41.7891C26.474 41.3047 26.6406 40.8854 26.8438 40.5312C27.0469 40.1719 27.2995 39.8932 27.6016 39.6953C27.9089 39.4922 28.2708 39.3906 28.6875 39.3906C29.1667 39.3906 29.5781 39.4792 29.9219 39.6562C30.2656 39.8281 30.5469 40.0859 30.7656 40.4297C30.9896 40.7734 31.1536 41.2031 31.2578 41.7188C31.3672 42.2292 31.4219 42.8203 31.4219 43.4922ZM29.2422 44.0469V43.4922C29.2422 43.1016 29.2266 42.7656 29.1953 42.4844C29.1641 42.2031 29.1068 41.9688 29.0234 41.7812C28.9401 41.5938 28.8203 41.4531 28.6641 41.3594C28.513 41.2656 28.3125 41.2188 28.0625 41.2188C27.8385 41.2188 27.651 41.263 27.5 41.3516C27.349 41.4349 27.2188 41.5599 27.1094 41.7266C27.0052 41.888 26.9271 42.0807 26.875 42.3047C26.8281 42.5234 26.8021 42.7656 26.7969 43.0312V44.5078C26.8021 44.8672 26.8464 45.1849 26.9297 45.4609C27.013 45.737 27.1458 45.9505 27.3281 46.1016C27.5156 46.2526 27.7656 46.3281 28.0781 46.3281C28.3229 46.3281 28.5208 46.2865 28.6719 46.2031C28.8229 46.1198 28.9401 45.987 29.0234 45.8047C29.112 45.6224 29.1693 45.388 29.1953 45.1016C29.2266 44.8099 29.2422 44.4583 29.2422 44.0469Z"
                fill={color}
            />
            <path
                d="M23.6992 23.2502C25.0796 22.483 24.9007 19.5265 23.301 16.642C22.6147 15.4 21.771 14.3942 20.9272 13.6911C19.9183 14.4399 18.6961 14.846 17.4397 14.8499C16.1814 14.8471 14.9571 14.441 13.9466 13.6911C13.1028 14.3942 12.2613 15.4011 11.5728 16.642C9.97195 19.5254 9.79533 22.483 11.1791 23.2502C11.7956 23.6012 12.4458 23.338 13.1163 22.6922C12.9908 23.388 12.9279 24.0935 12.9285 24.8005C12.9285 28.1057 14.211 30.7765 15.7893 30.7765C16.7411 30.7765 17.2125 29.8034 17.4386 28.315C17.6636 29.7932 18.1361 30.7765 19.0811 30.7765C20.6527 30.7765 21.9453 28.1046 21.9453 24.8005C21.9453 24.058 21.8756 23.3492 21.7563 22.6934C22.4313 23.3402 23.0793 23.608 23.6981 23.2525L23.6992 23.2502ZM17.4375 13.7249C18.0757 13.7344 18.7095 13.6169 19.302 13.3792C19.8944 13.1414 20.4337 12.7883 20.8883 12.3402C21.343 11.8921 21.704 11.3581 21.9504 10.7691C22.1967 10.1802 22.3234 9.5482 22.3232 8.90984C22.323 8.27149 22.1958 7.63955 21.9491 7.0508C21.7023 6.46206 21.3409 5.92828 20.8859 5.48051C20.431 5.03275 19.8915 4.67994 19.2989 4.44264C18.7062 4.20533 18.0724 4.08826 17.4341 4.09824C16.1703 4.118 14.9649 4.63404 14.0783 5.53492C13.1917 6.4358 12.695 7.64924 12.6955 8.91322C12.6959 10.1772 13.1935 11.3903 14.0807 12.2905C14.9679 13.1908 16.1736 13.706 17.4375 13.7249ZM27.1057 16.7781C28.1337 16.7481 29.1096 16.3186 29.8261 15.5808C30.5427 14.843 30.9435 13.855 30.9435 12.8266C30.9435 11.7981 30.5427 10.8101 29.8261 10.0723C29.1096 9.33454 28.1337 8.90504 27.1057 8.87499C26.0574 8.87514 25.0521 9.29173 24.3109 10.0331C23.5697 10.7745 23.1534 11.7799 23.1536 12.8282C23.1537 13.8766 23.5703 14.8819 24.3117 15.6231C25.0531 16.3642 26.0585 16.7805 27.1068 16.7804L27.1057 16.7781ZM31.9207 19.1744C31.356 18.1529 30.6652 17.3271 29.9722 16.75C29.1432 17.3642 28.1396 17.6973 27.108 17.7006C26.2575 17.7006 25.4655 17.4677 24.7725 17.0819C25.3305 18.3115 25.6758 19.5569 25.74 20.6706C25.8457 22.3761 25.3125 23.6406 24.246 24.2312C24.0174 24.3568 23.7689 24.4421 23.5113 24.4832C23.4472 24.9242 23.4033 25.3832 23.4033 25.867C23.4033 28.5816 24.4552 30.7742 25.7523 30.7742C26.5331 30.7742 26.9223 29.9755 27.1068 28.7537C27.2902 29.9687 27.6783 30.7742 28.4568 30.7742C29.745 30.7742 30.8081 28.5805 30.8081 25.8692C30.8081 25.2584 30.7485 24.6767 30.6506 24.1367C31.2041 24.6689 31.7373 24.8882 32.2458 24.5957C33.3787 23.9657 33.2325 21.538 31.9196 19.1732L31.9207 19.1744ZM7.7692 16.7781C8.55054 16.7777 9.3142 16.5456 9.96365 16.1112C10.6131 15.6768 11.1192 15.0595 11.4178 14.3375C11.7165 13.6156 11.7945 12.8212 11.6418 12.0549C11.4891 11.2887 11.1126 10.5849 10.5599 10.0325C10.0073 9.48021 9.30328 9.10414 8.53693 8.95187C7.77057 8.79961 6.97627 8.87798 6.25445 9.17709C5.53263 9.4762 4.9157 9.98261 4.48166 10.6323C4.04762 11.282 3.81595 12.0458 3.81595 12.8271C3.81625 13.8755 4.23285 14.8808 4.97416 15.6222C5.71548 16.3635 6.72083 16.7801 7.7692 16.7804V16.7781ZM10.6211 24.2279C8.83008 23.2322 8.66583 20.2634 10.1081 17.0796C9.39519 17.4843 8.59008 17.6986 7.77033 17.7017C6.69483 17.7017 5.70933 17.3417 4.90158 16.75C4.2097 17.326 3.52008 18.1517 2.95308 19.1721C1.6402 21.5391 1.4962 23.9669 2.6302 24.5946C3.13645 24.8849 3.67083 24.6677 4.22095 24.1379C4.11991 24.7091 4.06909 25.288 4.06908 25.8681C4.06908 28.5816 5.12095 30.7731 6.41808 30.7731C7.19883 30.7731 7.58808 29.9744 7.77258 28.7537C7.9582 29.9687 8.34633 30.7742 9.12258 30.7742C10.413 30.7742 11.4738 28.5805 11.4738 25.8692C11.4738 25.3821 11.4288 24.922 11.3647 24.481C11.1043 24.4399 10.8531 24.3539 10.6222 24.2267L10.6211 24.2279Z"
                fill={color}
            />
        </svg>
    );
};
export const GamePageIcon = () => {
    const color: string = IsUrl("game") ? "#2A334E" : "#CFCFCF";
    return (
        <svg
            width="37"
            height="54"
            viewBox="0 0 37 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.64844 42.0234V46.7109C8.48698 46.8828 8.25 47.0833 7.9375 47.3125C7.63021 47.5365 7.22656 47.7344 6.72656 47.9062C6.23177 48.0729 5.6276 48.1562 4.91406 48.1562C4.28385 48.1562 3.71094 48.0573 3.19531 47.8594C2.6849 47.6615 2.24479 47.362 1.875 46.9609C1.51042 46.5547 1.23177 46.0495 1.03906 45.4453C0.846354 44.8359 0.75 44.1146 0.75 43.2812V41.3438C0.75 40.5208 0.841146 39.8047 1.02344 39.1953C1.21094 38.5807 1.48177 38.0703 1.83594 37.6641C2.1901 37.2578 2.61198 36.9557 3.10156 36.7578C3.59635 36.5599 4.15365 36.4609 4.77344 36.4609C5.6276 36.4609 6.32812 36.6042 6.875 36.8906C7.42708 37.1771 7.84375 37.6016 8.125 38.1641C8.41146 38.7266 8.58333 39.4167 8.64062 40.2344H6.42969C6.39323 39.7552 6.3125 39.3802 6.1875 39.1094C6.06771 38.8385 5.89844 38.6458 5.67969 38.5312C5.46094 38.4115 5.17708 38.3516 4.82812 38.3516C4.52604 38.3516 4.26302 38.4062 4.03906 38.5156C3.8151 38.6198 3.6276 38.7917 3.47656 39.0312C3.32552 39.2708 3.21354 39.5781 3.14062 39.9531C3.06771 40.3281 3.03125 40.7865 3.03125 41.3281V43.2812C3.03125 43.8177 3.07292 44.276 3.15625 44.6562C3.23958 45.0365 3.36198 45.3464 3.52344 45.5859C3.6901 45.8255 3.89844 46 4.14844 46.1094C4.40365 46.2135 4.70312 46.2656 5.04688 46.2656C5.32292 46.2656 5.54427 46.237 5.71094 46.1797C5.8776 46.1224 6.01042 46.0625 6.10938 46C6.21354 45.9323 6.29948 45.8802 6.36719 45.8438V43.75H4.73438V42.0234H8.64844ZM13.9141 46.0547V42.1484C13.9141 41.8932 13.8828 41.6901 13.8203 41.5391C13.763 41.388 13.6745 41.2786 13.5547 41.2109C13.4401 41.138 13.2995 41.1016 13.1328 41.1016C12.9453 41.1016 12.7891 41.1406 12.6641 41.2188C12.5391 41.2969 12.4453 41.4089 12.3828 41.5547C12.3255 41.7005 12.2969 41.875 12.2969 42.0781H10.1016C10.1016 41.7135 10.1719 41.3698 10.3125 41.0469C10.4531 40.7188 10.6589 40.4323 10.9297 40.1875C11.2057 39.9375 11.5339 39.7422 11.9141 39.6016C12.2943 39.4609 12.7214 39.3906 13.1953 39.3906C13.7578 39.3906 14.2578 39.487 14.6953 39.6797C15.1328 39.8672 15.4792 40.1667 15.7344 40.5781C15.9896 40.9896 16.1172 41.5234 16.1172 42.1797V45.9453C16.1172 46.4193 16.1406 46.8047 16.1875 47.1016C16.2396 47.3984 16.3151 47.6536 16.4141 47.8672V48H14.2109C14.112 47.7656 14.0365 47.474 13.9844 47.125C13.9375 46.7708 13.9141 46.4141 13.9141 46.0547ZM14.1797 42.8359L14.1875 44.1484H13.3828C13.1745 44.1484 12.9922 44.1823 12.8359 44.25C12.6849 44.3177 12.5573 44.4141 12.4531 44.5391C12.349 44.6589 12.2708 44.7995 12.2188 44.9609C12.1719 45.1224 12.1484 45.2943 12.1484 45.4766C12.1484 45.6797 12.1771 45.8516 12.2344 45.9922C12.2917 46.1328 12.3776 46.2396 12.4922 46.3125C12.6068 46.3854 12.7422 46.4219 12.8984 46.4219C13.138 46.4219 13.3464 46.3724 13.5234 46.2734C13.7005 46.1745 13.8307 46.0547 13.9141 45.9141C14.0026 45.7734 14.0312 45.6432 14 45.5234L14.5 46.375C14.4375 46.5677 14.3516 46.7682 14.2422 46.9766C14.138 47.1849 14.0052 47.3776 13.8438 47.5547C13.6823 47.7318 13.4818 47.8776 13.2422 47.9922C13.0078 48.1016 12.7292 48.1562 12.4062 48.1562C11.9531 48.1562 11.5391 48.0521 11.1641 47.8438C10.7891 47.6354 10.4922 47.3438 10.2734 46.9688C10.0599 46.5938 9.95312 46.1484 9.95312 45.6328C9.95312 45.2057 10.0208 44.8203 10.1562 44.4766C10.2969 44.1276 10.5052 43.8333 10.7812 43.5938C11.0573 43.349 11.4062 43.1615 11.8281 43.0312C12.25 42.901 12.7448 42.8359 13.3125 42.8359H14.1797ZM19.9375 41.2969V48H17.7422V39.5469H19.8047L19.9375 41.2969ZM19.625 43.4844L19.0234 43.5C19.013 42.9062 19.0651 42.3594 19.1797 41.8594C19.2943 41.3594 19.4661 40.9245 19.6953 40.5547C19.9297 40.1849 20.224 39.8984 20.5781 39.6953C20.9323 39.4922 21.3464 39.3906 21.8203 39.3906C22.1276 39.3906 22.4115 39.4479 22.6719 39.5625C22.9323 39.6719 23.1589 39.8464 23.3516 40.0859C23.5443 40.3203 23.6927 40.6276 23.7969 41.0078C23.901 41.3828 23.9531 41.8333 23.9531 42.3594V48H21.7656V42.625C21.7656 42.25 21.7292 41.9635 21.6562 41.7656C21.5833 41.5625 21.4792 41.4219 21.3438 41.3438C21.2083 41.2604 21.0417 41.2188 20.8438 41.2188C20.6354 41.2188 20.4531 41.276 20.2969 41.3906C20.1406 41.5052 20.013 41.6667 19.9141 41.875C19.8203 42.0781 19.7474 42.3177 19.6953 42.5938C19.6484 42.8698 19.625 43.1667 19.625 43.4844ZM23.7422 43.2656L22.9531 43.3672C22.9427 42.8099 22.9922 42.2917 23.1016 41.8125C23.2109 41.3281 23.3802 40.9062 23.6094 40.5469C23.8385 40.1823 24.125 39.8984 24.4688 39.6953C24.8177 39.4922 25.2214 39.3906 25.6797 39.3906C26.0234 39.3906 26.3359 39.4479 26.6172 39.5625C26.8984 39.6771 27.138 39.862 27.3359 40.1172C27.5391 40.3672 27.6927 40.6979 27.7969 41.1094C27.9062 41.5208 27.9609 42.0208 27.9609 42.6094V48H25.7656V42.6172C25.7656 42.237 25.7292 41.9453 25.6562 41.7422C25.5833 41.5391 25.4792 41.401 25.3438 41.3281C25.2083 41.2552 25.0469 41.2188 24.8594 41.2188C24.6719 41.2188 24.5078 41.2708 24.3672 41.375C24.2318 41.4792 24.1172 41.625 24.0234 41.8125C23.9297 41.9948 23.8594 42.2109 23.8125 42.4609C23.7656 42.7057 23.7422 42.974 23.7422 43.2656ZM33.0156 48.1562C32.4375 48.1562 31.9245 48.0677 31.4766 47.8906C31.0339 47.7135 30.6589 47.4583 30.3516 47.125C30.0443 46.7865 29.8099 46.3776 29.6484 45.8984C29.487 45.4193 29.4062 44.8724 29.4062 44.2578V43.5625C29.4062 42.875 29.4844 42.2734 29.6406 41.7578C29.7969 41.237 30.0182 40.7995 30.3047 40.4453C30.5911 40.0911 30.9427 39.8281 31.3594 39.6562C31.7812 39.4792 32.2578 39.3906 32.7891 39.3906C33.3203 39.3906 33.7865 39.4792 34.1875 39.6562C34.5938 39.8281 34.9297 40.0885 35.1953 40.4375C35.4609 40.7812 35.6615 41.2083 35.7969 41.7188C35.9323 42.2292 36 42.8229 36 43.5V44.5H30.3359V42.9609H33.8516V42.7656C33.8516 42.4219 33.8151 42.1354 33.7422 41.9062C33.6693 41.6719 33.5547 41.4974 33.3984 41.3828C33.2422 41.2682 33.0339 41.2109 32.7734 41.2109C32.5547 41.2109 32.3698 41.2552 32.2188 41.3438C32.0677 41.4323 31.9479 41.5703 31.8594 41.7578C31.7708 41.9453 31.7057 42.1901 31.6641 42.4922C31.6224 42.7891 31.6016 43.1458 31.6016 43.5625V44.2578C31.6016 44.6484 31.6354 44.9766 31.7031 45.2422C31.7708 45.5026 31.8698 45.7161 32 45.8828C32.1354 46.0443 32.2995 46.1615 32.4922 46.2344C32.6849 46.3021 32.9089 46.3359 33.1641 46.3359C33.5495 46.3359 33.8958 46.2682 34.2031 46.1328C34.5156 45.9922 34.7812 45.8021 35 45.5625L35.875 46.8906C35.724 47.0885 35.5156 47.2865 35.25 47.4844C34.9844 47.6823 34.6667 47.8438 34.2969 47.9688C33.9271 48.0938 33.5 48.1562 33.0156 48.1562Z"
                fill={color}
            />
            <g clipPath="url(#clip0_2918_1187)">
                <path
                    d="M25.4999 6C27.1589 6 28.4324 7.2645 29.3759 8.625L29.6954 9.1065L29.9879 9.5865C30.0809 9.7425 30.1694 9.8985 30.2549 10.0485C31.4354 12.159 32.4629 14.9145 33.1424 17.637C33.8174 20.3385 34.1909 23.16 33.9524 25.3785C33.7124 27.606 32.5649 30 29.9999 30C27.6989 30 25.8854 28.77 24.4124 27.5685L22.7474 26.172C21.3629 25.038 19.8479 24 17.9999 24C16.1519 24 14.6354 25.038 13.2539 26.172L11.5889 27.567C10.1129 28.77 8.29944 30 5.99994 30C3.43344 30 2.28594 27.606 2.04744 25.3785C1.81044 23.1585 2.18244 20.3385 2.85744 17.637C3.53694 14.9145 4.56444 12.159 5.74494 10.0485L6.01194 9.585L6.30444 9.1065L6.62394 8.625C7.56744 7.2645 8.84094 6 10.4999 6C11.2649 6 12.0254 6.186 12.7724 6.405L13.6619 6.678C13.8089 6.723 13.9544 6.7665 14.0999 6.807C15.3974 7.179 16.7249 7.5 17.9999 7.5C19.2749 7.5 20.6024 7.179 21.8999 6.807L23.2274 6.4065C23.9744 6.186 24.7349 6 25.4999 6ZM12.7499 12C11.7554 12 10.8016 12.3951 10.0983 13.0984C9.39503 13.8016 8.99994 14.7554 8.99994 15.75C8.99994 16.7446 9.39503 17.6984 10.0983 18.4017C10.8016 19.1049 11.7554 19.5 12.7499 19.5C13.7445 19.5 14.6983 19.1049 15.4016 18.4017C16.1049 17.6984 16.4999 16.7446 16.4999 15.75C16.4999 14.7554 16.1049 13.8016 15.4016 13.0984C14.6983 12.3951 13.7445 12 12.7499 12ZM23.2499 12C22.8521 12 22.4706 12.158 22.1893 12.4393C21.908 12.7206 21.7499 13.1022 21.7499 13.5V14.25H20.9999C20.6021 14.25 20.2206 14.408 19.9393 14.6893C19.658 14.9706 19.4999 15.3522 19.4999 15.75C19.4999 16.1478 19.658 16.5294 19.9393 16.8107C20.2206 17.092 20.6021 17.25 20.9999 17.25H21.7499V18C21.7499 18.3978 21.908 18.7794 22.1893 19.0607C22.4706 19.342 22.8521 19.5 23.2499 19.5C23.6478 19.5 24.0293 19.342 24.3106 19.0607C24.5919 18.7794 24.7499 18.3978 24.7499 18V17.25H25.4999C25.8978 17.25 26.2793 17.092 26.5606 16.8107C26.8419 16.5294 26.9999 16.1478 26.9999 15.75C26.9999 15.3522 26.8419 14.9706 26.5606 14.6893C26.2793 14.408 25.8978 14.25 25.4999 14.25H24.7499V13.5C24.7499 13.1022 24.5919 12.7206 24.3106 12.4393C24.0293 12.158 23.6478 12 23.2499 12ZM12.7499 15C12.9489 15 13.1396 15.079 13.2803 15.2197C13.4209 15.3603 13.4999 15.5511 13.4999 15.75C13.4999 15.9489 13.4209 16.1397 13.2803 16.2803C13.1396 16.421 12.9489 16.5 12.7499 16.5C12.551 16.5 12.3603 16.421 12.2196 16.2803C12.079 16.1397 11.9999 15.9489 11.9999 15.75C11.9999 15.5511 12.079 15.3603 12.2196 15.2197C12.3603 15.079 12.551 15 12.7499 15Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_2918_1187">
                    <rect width="36" height="36" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

const IsUrl = (name: string) => {
    const pathname: string = usePathname();
    return pathname.includes(name);
};