import styles from "../styles/flexContainer.module.scss";

// デフォルト
export default function FlexContainer({ children }){
    return(
        <div className={styles.flexContainer}>
            {children}
        </div>
    )
}


// profileコンテナ―
export function ProfileContainer({ children }){
    return(
        <div className={styles.profileContainer}>
            {children}
        </div>
    )
}

// Linksコンテナ―
export function LinkContainer({ children }){
    return(
        <div className={styles.linksContainer}>
            {children}
        </div>
    )
}

// Clipsコンテナ― 
export function ClipsContainer({ children }){
    return(
        <div className={styles.clipsContainer}>
            {children}
        </div>
    )
}
