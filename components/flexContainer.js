import styles from "../styles/flexContainer.module.scss";

export default function FlexContainer({ children }){
    return(
        <div className={styles.flexContainer}>
            {children}
        </div>
    )
}