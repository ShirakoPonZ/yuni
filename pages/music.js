import { NavPages } from "../components/nav";
import YouTube from "react-youtube";

import styles from "../styles/music.module.scss";

export default function Music(){
    return(
        <>
            <main>
                <NavPages />
                <div className={styles.wrap}>
                    <h1>music</h1>

                    <h2>Original</h2>


                    <div className={styles.sideBySide}>
                        <div>
                            <h2>曲名</h2>
                            <p>本文</p>
                        </div>

                        <YouTube videoId="kHk9qBGTnh8" />
                    </div>
                    <a href="#">サブスクリンク</a>


                    <div className={styles.sideBySide}>
                        <div>
                            <h2>曲名</h2>
                            <p>本文</p>
                        </div>

                        <YouTube videoId="LjkDJHk2KrE" />
                    </div>
                </div>
            </main>
        </>
    )
}