import styles from "./Avatar.module.css";

type AvatarProps = {
    src: string;
    hasBorder: boolean;
}

export function Avatar({ src, hasBorder }: AvatarProps) {
    return (
        <img 
            src={src} 
            className={ hasBorder ? styles.avatarWithBorder : styles.avatar }    
        />
    )
}