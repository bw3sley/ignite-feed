import { ThumbsUp, Trash } from "phosphor-react";

import styles from "./Comment.module.css";

export function Comment() {
    return (
        <div className={styles.comment}>
            <img 
                src="https://github.com/bw3sley.png" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Wesley Bernardes</strong>

                            <time
                                title="18 de Julho às 22:25" 
                                dateTime="2022-07-18 22:25:00"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button type="button" title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button type="button">
                        <ThumbsUp size={20}/>

                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}