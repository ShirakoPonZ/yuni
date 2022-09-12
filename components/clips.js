// twitterライブラリ ツイート読み込み
import styles from "../styles/clips.module.scss";
import { TwitterTweetEmbed } from 'react-twitter-embed';

export default function Clips(){
    return(
        <>
            <h1>clips</h1>
            <div className={styles.ClipsContainer}>
                
                <TwitterTweetEmbed
                    tweetId={'1540258427703660544'}
                />

                <TwitterTweetEmbed
                    tweetId={"1517431756164861952"}
                />

                <TwitterTweetEmbed
                    tweetId={"1509833271513088000"}
                />
            </div>
            <button>more</button>
        </>
    )
}