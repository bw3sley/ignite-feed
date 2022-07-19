import { Avatar } from "./Avatar";

import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                src="https://images.unsplash.com/photo-1603484477859-abe6a73f9366?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
                className={styles.cover}
            />

            <div className={styles.profile}>
                <Avatar 
                    src="https://avatars.githubusercontent.com/u/102110756?v=4"
                    hasBorder 
                />

                <strong>
                    Wesley Bernardes
                </strong>

                <span>
                    Full Stack Developer
                </span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}