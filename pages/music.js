import styles from "../styles/music.module.scss";

import { NavPages } from "../components/nav";
import YouTube from "react-youtube";
import Container from "../components/container";

export default function Music(){
    return(
        <>
            <main>
                <NavPages />
                <Container>
                <div className={styles.wrap}>
                    <h1>music</h1>

                    <h2>Original</h2>

                    <div className={styles.sideBySide}>
                        <div>
                            <h2>Beautiful World</h2>
                            <p>初のワンマンARライブUNiONWAVE-evolveにて披露された曲であり
                                透明声彩、Winter Berryに続くYUC‘eさん作曲の楽曲。
                                様々な葛藤とそれを超えた先にある光を感じさせる優しい歌声に
                                先に進む勇気を貰えるような楽曲です。</p>
                        </div>

                        <YouTube videoId="7fammybEuB8" />
                    </div>
                    <a href="#">サブスクリンク</a>

                    <div className={styles.sideBySideCenter}>
                        <div>
                            <h2>Destination</h2>
                            <p>劇場アニメレイドバッカーズの挿入歌として発表されたkzさん作曲の楽曲。
                                メジャーグループがアニメのタイアップで歌っているイメージで作ったとのインタビューでの言葉通り王道のアニソンのような思わず口ずさみたくなるような疾走感溢れる曲になっています。
                            </p>
                        </div>
                        <YouTube videoId="9nldJaO6knU" />
                    </div>

                    <div className={styles.sideBySideCenter}>
                        <div>
                            <h2>ヴァンパイア</h2>
                            <p>カバーアルバムperidotに収録されている有名ボカロP DECO*27さんの楽曲。
                                2オクターブ近い広い音域で、高音域はファルセットを多用するような歌唱難易度の高い曲ですが、
                                かわいさに加え妖艶さを感じさせる圧巻の歌唱力で歌い上げられています。
                            </p>
                        </div>
                        <YouTube videoId="IVi4mnHAy38" />
                    </div>

                </div>
                </Container>
            </main>
        </>
    )
}