import styles from "../styles/links.module.scss";

import Image from "next/image";

import youtubeIcon from "../img/youtube_logo.png";
import twitterIcon from "../img/twitter_logo.png";
import tiktokIcon from "../img/tiktok_logo.svg";
import boothIcon from "../img/booth_logo.png";


export default function Links() {
    return(
    <>

    <h1>Links</h1>
        <div className={styles.links}>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/c/YuNivirtualsinger">
                <figure>
                <Image
                    src={youtubeIcon}
                    layout="responsive"
                    alt="Youtubeアイコン"
                    objectFit
                />
                </figure>
            </a>

            <a target="_blank" rel="noreferrer" href="https://twitter.com/_YuNiofficial_">
            <figure>
                <Image
                    src={twitterIcon}
                    layout="responsive"
                    alt="Twitterアイコン"
                    objectFit
                />
                </figure>
            </a>
            
            <a target="_blank" rel="noreferrer" href="https://yunionwave.booth.pm/">
                <figure>
                <Image
                    src={boothIcon}
                    layout="responsive"
                    alt="boothアイコン"
                />
                </figure>
            </a>
            
            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@yuni_officialchannel_">
                <figure>
                <Image
                    src={tiktokIcon}
                    layout="responsive"
                    alt="tiktokアアイコン"
                />
                </figure>
            </a>

            <a target="_blank" rel="noreferrer" href="https://yunionwave.com/">YuNiオフィシャルサイト</a>
        </div>
    </>

    )
}