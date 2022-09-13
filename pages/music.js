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

                    <h1>Original</h1>

                    <div className={styles.sideBySide}>
                        <div>
                            <h2>Write my voice</h2>
                            <p>2019年リリースの【clear】に収録されているオリジナル曲で、「透明声彩」の答えのような曲らしく、和歌で言う返歌のような印象を受けます。この曲は、今に至るまでの道のりが自分の力になり、未来を照らしてくれるような、希望と自信を与えてくれ、また頑張ろうというような気持ちになれる曲です。</p>
                        </div>
                        <YouTube videoId="aAOfNwVJaKA" />
                    </div>

                    <div className={styles.sideBySide}>
                        <div>
                            <h2>Beautiful World</h2>
                            <p>2019年リリースしたシングル【Beautiful world】の収録曲です。YouTubeで公開されたMVでは新衣装ということもあり人気曲の一つです。ラスサビでは曲前半とは違った気持ちと力強さがこもっていて明るく前を向けるような曲になっています。</p>
                        </div>
                        <YouTube videoId="7fammybEuB8" />
                    </div>
                    <a href="#">サブスクリンク</a>

                    <div className={styles.sideBySideCenter}>
                        <div>
                            <h2>Destination</h2>
                            <p>劇場アニメレイドバッカーズの挿入歌として発表されたkzさん作曲の楽曲。メジャーグループがアニメのタイアップで歌っているイメージで作ったとのインタビューでの言葉通り王道のアニソンのような思わず口ずさみたくなるような疾走感溢れる曲になっています。</p>
                        </div>
                        <YouTube videoId="9nldJaO6knU" />
                    </div>

                    <div className={styles.sideBySide}>
                        <div>
                            <h2>ココロノック</h2>
                            <p>TVアニメ【宇崎ちゃんは遊びたい！】のエンディングテーマとして有名で、2021年リリースのオリジナルアルバム【eternal journey】に収録されている曲です。自分の気持ちを上手く伝えられない乙女心を歌った曲で、聴くと思わず泣けてしまえる一曲です。</p>
                        </div>
                        <YouTube videoId="_H8HJjWTjRM" />
                    </div>

                    <div className={styles.sideBySide}>
                        <div>
                            <h2>YuNiSon</h2>
                            <p>細かく拍を刻む伴奏がワクワク感を演出してくれるYuNiちゃんのイメージにぴったりな曲。どうかYuNiちゃんとゆにチルの重ねた音がどこまでも響いて行ってほしいと願いたくなるような、キラキラした曲。</p>
                        </div>
                        <YouTube videoId="vh7AYd5D2sc" />
                    </div>

                    <div className={styles.sideBySide}>
                        <div>
                            <h2>Write my voice</h2>
                            <p>2019年リリースの【clear】に収録されているオリジナル曲で、「透明声彩」の答えのような曲らしく、和歌で言う返歌のような印象を受けます。この曲は、今に至るまでの道のりが自分の力になり、未来を照らしてくれるような、希望と自信を与えてくれ、また頑張ろうというような気持ちになれる曲です。</p>
                        </div>
                        <YouTube videoId="aAOfNwVJaKA" />
                    </div>

                    <div className={styles.sideBySide}>
                        <div>
                            <h2>夜と幽霊</h2>
                            <p>2021年にリリースされたオリジナルアルバム【Eternal Journey】に収録されています。どこか寂しさのある曲調と考えさせられるような歌詞をYuNiちゃんによる優しく透明感のある歌声で聴くと圧巻のひと言でしか表せないような曲になっています。</p>
                        </div>
                        <YouTube videoId="lJ_4RtJNSuA" />
                    </div>

                    <div className={styles.sideBySide}>
                        <div>
                            <h2>Dreamin’Dreamer</h2>
                            <p>2021年リリースのオリジナルアルバム【eternal journey】に収録されている曲のひとつです。陽気さがあり聞いていて楽しい曲です。恋心を物語に例えて歌っていて、心の距離が縮められずヤキモキしつつも、その思いを歌に乗せて伝えようとする行動にYuNIちゃんらしさを感じました。</p>
                        </div>
                        <YouTube videoId="Cko6yq7wquY" />
                    </div>


            {/* カバー曲 */}
                    <h1>cover</h1>
                    <div className={styles.sideBySideCenter}>
                        <div>
                            <h2>シャルル</h2>
                            <p>バルーンさんの代表曲の一つ。2019年リリースの【CoLoR】に収録されています。この曲のカバーでは大きな特徴である高音のサビをとても綺麗に歌えていることです。所々にも歌い方に工夫がありYuNiちゃんらしさを感じられる曲です。</p>
                        </div>
                        <YouTube videoId="LjkDJHk2KrE" />
                    </div>
                    
                    <div className={styles.sideBySideCenter}>
                        <div>
                            <h2>命に嫌われている</h2>
                            <p>言わずと知れたボカロ神曲。このカバーで注目したいのはYuNiちゃんの変幻自在の表現力。この曲の意味、ストーリーを完全に理解して表現している。サビに近づくにつれ緊張感をもたせつつ、サビでは聴いている人の心に届く真剣さが胸を打つ。またハモリ部分はあえて抑揚をつけず冷めた部分との対比が楽しめてよい。</p>
                        </div>
                        <YouTube videoId="85LtMbcugjI" />
                    </div>

                    <div className={styles.sideBySideCenter}>
                        <div>
                            <h2>ヴァンパイア</h2>
                            <p>カバーアルバムperidotに収録されている有名ボカロP DECO*27さんの楽曲。2オクターブ近い広い音域で、高音域はファルセットを多用するような歌唱難易度の高い曲ですが、かわいさに加え妖艶さを感じさせる圧巻の歌唱力で歌い上げられています。</p>
                        </div>
                        <YouTube videoId="IVi4mnHAy38" />
                    </div>

                    <div className={styles.sideBySideCenter}>
                        <div>
                            <h2>ダーリンダンス</h2>
                            <p>2022年リリース【Peridot】に収録されている曲です。この曲はあのかいりきベアさんの有名曲の一つですが、いつもの可愛い歌声の中にあるどこか裏のあるような歌い方ととてもかわいい合いの手が合わさり一層YuNiワールドに引き込んでくれる曲です。</p>
                        </div>
                        <YouTube videoId="H12A0INWVtw" />
                    </div>
                    

                </div>
                </Container>
            </main>
        </>
    )
}


{/* 
<div className={styles.sideBySide}>
    <div>
        <h2></h2>
        <p></p>
    </div>
    <YouTube videoId="" />
</div> */}