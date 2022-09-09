// twitterライブラリ ツイート読み込み
import { TwitterTweetEmbed } from 'react-twitter-embed';

export default function Clips(){
    return(
        <>
            <h1>clips</h1>
            <div className="clips">
                <TwitterTweetEmbed
                    tweetId={'1540258427703660544'}
                />
            </div>
            <button>more</button>
        </>
    )
}