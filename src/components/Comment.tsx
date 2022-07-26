import { useState } from "react";

import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

interface ICommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: ICommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    function handleDeleteComment() {
        onDeleteComment(content);
    }
    
    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
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

                        <button onClick={handleDeleteComment} type="button" title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment} type="button">
                        <ThumbsUp size={20}/>

                        Aplaudir <span>{ likeCount }</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}