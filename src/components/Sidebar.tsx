import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}  
                src="https://images.unsplash.com/photo-1603484477859-abe6a73f9366?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
                alt="" 
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/bw3sley.png" />

                <strong>Wesley Bernardes</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu pefil
                </a>
            </footer>
        </aside>
    )
}