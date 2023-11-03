import { component$ } from "@builder.io/qwik";
import styles from './socials.module.css'

export type SocialIcon = {
    url: string;
    type: 'telegram' | 'instagram' | 'linkedin' | 'github';
}

export type SocialsProps = {
    icons: SocialIcon[];
    style: 'filled' | 'outline';
    class?: string;
}

export default component$((props: SocialsProps) => {
    function renderIcon(icon: SocialIcon) {
        switch (icon.type) {
            case 'linkedin':
                return (
                    <a href="https://www.linkedin.com/in/andrewraikh/" target="_blank">
                        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.54736 21H1.19267V6.97969H5.54736V21ZM3.36767 5.06719C1.97548 5.06719 0.845795 3.91406 0.845795 2.52187C0.845795 1.12969 1.97548 0 3.36767 0C4.75986 0 5.88954 1.12969 5.88954 2.52187C5.88954 3.91406 4.75986 5.06719 3.36767 5.06719ZM21.8458 21H17.5005V14.175C17.5005 12.5484 17.4677 10.4625 15.2364 10.4625C12.9724 10.4625 12.6255 12.2297 12.6255 14.0578V21H8.27548V6.97969H12.452V8.89219H12.513C13.0942 7.79062 14.5145 6.62812 16.6333 6.62812C21.0395 6.62812 21.8505 9.52969 21.8505 13.2984V21H21.8458Z" fill="#fff"></path></svg>
                    </a>
                )
            case 'github':
                return (
                    <a href="https://github.com/AndreyRaih" target="_blank">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.62706 18.6281C8.62706 18.7219 8.51924 18.7969 8.38331 18.7969C8.22862 18.8109 8.12081 18.7359 8.12081 18.6281C8.12081 18.5344 8.22862 18.4594 8.36456 18.4594C8.50518 18.4453 8.62706 18.5203 8.62706 18.6281ZM7.16924 18.4172C7.13643 18.5109 7.23018 18.6187 7.37081 18.6469C7.49268 18.6937 7.63331 18.6469 7.66143 18.5531C7.68956 18.4594 7.60049 18.3516 7.45987 18.3094C7.33799 18.2766 7.20206 18.3234 7.16924 18.4172ZM9.24112 18.3375C9.10518 18.3703 9.01143 18.4594 9.02549 18.5672C9.03956 18.6609 9.16143 18.7219 9.30206 18.6891C9.43799 18.6562 9.53174 18.5672 9.51768 18.4734C9.50362 18.3844 9.37706 18.3234 9.24112 18.3375ZM12.3255 0.375C5.82393 0.375 0.850494 5.31094 0.850494 11.8125C0.850494 17.0109 4.12237 21.4594 8.79581 23.025C9.39581 23.1328 9.60674 22.7625 9.60674 22.4578C9.60674 22.1672 9.59268 20.5641 9.59268 19.5797C9.59268 19.5797 6.31143 20.2828 5.62237 18.1828C5.62237 18.1828 5.08799 16.8187 4.31924 16.4672C4.31924 16.4672 3.24581 15.7312 4.39424 15.7453C4.39424 15.7453 5.56143 15.8391 6.20362 16.9547C7.23018 18.7641 8.95049 18.2437 9.62081 17.9344C9.72862 17.1844 10.0333 16.6641 10.3708 16.3547C7.75049 16.0641 5.10674 15.6844 5.10674 11.175C5.10674 9.88594 5.46299 9.23906 6.21299 8.41406C6.09112 8.10938 5.69268 6.85312 6.33487 5.23125C7.31456 4.92656 9.56924 6.49688 9.56924 6.49688C10.5067 6.23438 11.5146 6.09844 12.513 6.09844C13.5114 6.09844 14.5192 6.23438 15.4567 6.49688C15.4567 6.49688 17.7114 4.92188 18.6911 5.23125C19.3333 6.85781 18.9349 8.10938 18.813 8.41406C19.563 9.24375 20.0224 9.89062 20.0224 11.175C20.0224 15.6984 17.2614 16.0594 14.6411 16.3547C15.0724 16.725 15.438 17.4281 15.438 18.5297C15.438 20.1094 15.4239 22.0641 15.4239 22.4484C15.4239 22.7531 15.6396 23.1234 16.2349 23.0156C20.9224 21.4594 24.1005 17.0109 24.1005 11.8125C24.1005 5.31094 18.8271 0.375 12.3255 0.375ZM5.40674 16.5422C5.34581 16.5891 5.35987 16.6969 5.43956 16.7859C5.51456 16.8609 5.62237 16.8938 5.68331 16.8328C5.74424 16.7859 5.73018 16.6781 5.65049 16.5891C5.57549 16.5141 5.46768 16.4812 5.40674 16.5422ZM4.90049 16.1625C4.86768 16.2234 4.91456 16.2984 5.00831 16.3453C5.08331 16.3922 5.17706 16.3781 5.20987 16.3125C5.24268 16.2516 5.19581 16.1766 5.10206 16.1297C5.00831 16.1016 4.93331 16.1156 4.90049 16.1625ZM6.41924 17.8312C6.34424 17.8922 6.37237 18.0328 6.48018 18.1219C6.58799 18.2297 6.72393 18.2437 6.78487 18.1688C6.84581 18.1078 6.81768 17.9672 6.72393 17.8781C6.62081 17.7703 6.48018 17.7563 6.41924 17.8312ZM5.88487 17.1422C5.80987 17.1891 5.80987 17.3109 5.88487 17.4188C5.95987 17.5266 6.08643 17.5734 6.14737 17.5266C6.22237 17.4656 6.22237 17.3438 6.14737 17.2359C6.08174 17.1281 5.95987 17.0813 5.88487 17.1422Z" fill="#fff"></path></svg>
                    </a>
                )
            case 'instagram':
                return (
                    <a href="https://www.instagram.com/andrew_raikh/" target="_blank">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9997 5.27832C7.89485 5.27832 5.32227 7.80655 5.32227 10.9557C5.32227 14.1049 7.85049 16.6332 10.9997 16.6332C14.1489 16.6332 16.6771 14.0606 16.6771 10.9557C16.6771 7.8509 14.1045 5.27832 10.9997 5.27832ZM10.9997 14.5928C9.00372 14.5928 7.36259 12.9517 7.36259 10.9557C7.36259 8.95977 9.00372 7.31864 10.9997 7.31864C12.9957 7.31864 14.6368 8.95977 14.6368 10.9557C14.6368 12.9517 12.9957 14.5928 10.9997 14.5928Z" fill="white" />
                            <path d="M16.8996 6.43147C17.61 6.43147 18.1859 5.85558 18.1859 5.14518C18.1859 4.43478 17.61 3.85889 16.8996 3.85889C16.1892 3.85889 15.6133 4.43478 15.6133 5.14518C15.6133 5.85558 16.1892 6.43147 16.8996 6.43147Z" fill="white" />
                            <path d="M20.2258 1.81855C19.0726 0.620968 17.4315 0 15.5685 0H6.43145C2.57258 0 0 2.57258 0 6.43145V15.5242C0 17.4315 0.620968 19.0726 1.8629 20.2702C3.06048 21.4234 4.65726 22 6.47581 22H15.5242C17.4315 22 19.0282 21.379 20.1815 20.2702C21.379 19.1169 22 17.4758 22 15.5686V6.43145C22 4.56855 21.379 2.97177 20.2258 1.81855ZM20.0484 15.5686C20.0484 16.9436 19.5605 18.0524 18.7621 18.8065C17.9637 19.5605 16.8548 19.9597 15.5242 19.9597H6.47581C5.14516 19.9597 4.03629 19.5605 3.2379 18.8065C2.43952 18.0081 2.04032 16.8992 2.04032 15.5242V6.43145C2.04032 5.10081 2.43952 3.99194 3.2379 3.19355C3.99194 2.43952 5.14516 2.04032 6.47581 2.04032H15.6129C16.9435 2.04032 18.0524 2.43952 18.8508 3.2379C19.6048 4.03629 20.0484 5.14516 20.0484 6.43145V15.5686Z" fill="white" />
                        </svg>
                    </a>
                )
            case 'telegram':
                return (
                    <a href="https://t.me/prekraty_pole" target="_blank">
                        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.703 0.98487C20.4593 0.995562 20.2221 1.06338 20.0082 1.14905C19.7964 1.23413 18.5775 1.7544 16.7775 2.52401C14.9774 3.29361 12.6375 4.2958 10.318 5.28957C5.67892 7.27711 1.12027 9.2327 1.12027 9.2327L1.15349 9.21999C1.15349 9.21999 0.878353 9.31196 0.599401 9.50632C0.459925 9.6035 0.309872 9.72896 0.18701 9.91187C0.064148 10.0948 -0.0256721 10.354 0.00817678 10.6282C0.127069 11.5912 1.12515 11.8644 1.12515 11.8644L1.12906 11.8663L5.58328 13.3908C5.69684 13.7697 6.93426 17.8997 7.20646 18.7744C7.35679 19.2579 7.49749 19.5369 7.64426 19.7272C7.7177 19.8224 7.79467 19.8961 7.87977 19.95C7.91358 19.9714 7.94914 19.9875 7.98433 20.0018H7.98629C7.99061 20.0037 7.99468 20.0039 7.99899 20.0057L7.98726 20.0028C7.99544 20.0061 8.00351 20.0116 8.01169 20.0145C8.02757 20.02 8.03731 20.0199 8.05762 20.0243C8.56774 20.2024 8.9899 19.8718 8.9899 19.8718L9.00749 19.8581L11.7437 17.3203L16.1843 20.7826L16.24 20.808C17.0172 21.1531 17.7201 20.9606 18.1094 20.6438C18.4987 20.3271 18.6518 19.9187 18.6518 19.9187L18.6684 19.8757L21.9314 2.86897C22.0149 2.48849 22.0267 2.15961 21.948 1.86242C21.8692 1.56524 21.6779 1.30689 21.4379 1.1637C21.1978 1.02051 20.9467 0.974179 20.703 0.98487ZM20.7294 2.00217C20.8283 1.99758 20.9017 2.0089 20.9248 2.02269C20.9479 2.03648 20.9583 2.03467 20.9805 2.11846C21.0027 2.20225 21.0147 2.37874 20.9541 2.65496L20.9522 2.66082L17.7078 19.5689C17.7001 19.5859 17.6325 19.7423 17.4781 19.8679C17.3207 19.996 17.1455 20.096 16.6807 19.9011L11.8248 16.1144L11.688 16.0069L11.6851 16.0098L10.2329 14.9202L18.3938 5.31889C18.4565 5.2453 18.4965 5.15513 18.5091 5.05927C18.5216 4.9634 18.5061 4.86596 18.4645 4.77872C18.4228 4.69147 18.3568 4.61816 18.2744 4.56766C18.1919 4.51715 18.0966 4.4916 18 4.49411C17.9055 4.49656 17.8137 4.5257 17.7351 4.57815L5.92628 12.4507L1.46523 10.9233C1.46523 10.9233 1.02225 10.6768 1.00104 10.505C0.999867 10.4955 0.994637 10.5041 1.01766 10.4699C1.04068 10.4356 1.09854 10.3777 1.17108 10.3272C1.31617 10.2261 1.48184 10.165 1.48184 10.165L1.49845 10.1591L1.51507 10.1523C1.51507 10.1523 6.07396 8.19658 10.7128 6.20914C13.0322 5.21543 15.3717 4.21397 17.1713 3.44456C18.9704 2.67534 20.2704 2.12167 20.3805 2.07741C20.5058 2.02723 20.6304 2.00675 20.7294 2.00217ZM15.3175 7.39257L9.12867 14.6739L9.12574 14.6768C9.11608 14.6885 9.10694 14.7005 9.09837 14.713C9.08856 14.7265 9.07943 14.7406 9.07101 14.755C9.03624 14.814 9.01396 14.8796 9.00554 14.9475C9.00553 14.9488 9.00553 14.9501 9.00554 14.9514L8.19932 18.577C8.18592 18.5378 8.17653 18.5235 8.16219 18.4773V18.4763C7.90612 17.6535 6.73865 13.7585 6.57712 13.2198L15.3175 7.39257ZM9.82739 15.8671L10.9395 16.7017L9.30555 18.2164L9.82739 15.8671Z" fill="white" />
                        </svg>
                    </a>
                )
            default:
                return null;
        }
    }
    return (
        <div class={[styles.socials, styles[props.style], props.class]}>
            {props.icons.map(icon => renderIcon(icon))}
        </div>
    )
})
