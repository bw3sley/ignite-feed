import styles from "./Header.module.css";

import IgniteLogoSvg from "../assets/ignite-logo.svg";

export function Header() {
    return (
        <header className={styles.header}>
            <img 
                src={IgniteLogoSvg} 
                alt="Ignite Logo" 
            />

            <strong>Ignite Feed</strong>
        </header>
    )
}