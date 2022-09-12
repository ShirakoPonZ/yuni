import styles from "../styles/aniv.module.scss";

import Image from "next/image";
import ilandImg from "../img/yuni_laird.jpg";
import { NavPages } from "../components/nav";
import Container from "../components/container";

// import styles from "";

export default function Aniv(){
    return(
        <>
            <NavPages />
            <Container large>
                <h1>♪YuNiBirth記念企画♪</h1>
                {/* 二列スタイルを適用 */}
                <div className={styles.sideBySide}>
                    <figure>
                        <Image
                            src={ilandImg}
                            layout="responsive"
                            alt="贈呈書"
                        />
                    </figure>
                    <div>

                        <p>誕生日を祝して「スコットランド デュナンズ城城主の権利」を進呈します。</p>
                        <p>制定日: 2022年10月1日</p>
                        <p>今後のご健康とご多幸を、心よりお祈り申し上げます。</p>

                        <div className={styles.participationList}>
                            <span>☘4190kappakun</span>
                            <span>☘a1dnoah</span>
                            <span>☘himazin03</span>
                            <span>☘HIRA</span>
                            <span>☘KOU</span>
                            <span>☘Nao</span>
                            <span>☘pacific</span>
                            <span>☘Ray</span>
                            <span>☘sardonyx</span>
                            <span>☘simira</span>
                            <span>☘YUMA</span>
                            <span>☘Yuu</span>
                            <span>☘アーガス*</span>
                            <span>☘あお</span>
                            <span>☘アッピー</span>
                            <span>☘イリエッタ</span>
                            <span>☘えべんか だろく</span>
                            <span>☘カーマ</span>
                            <span>☘カミュ</span>
                            <span>☘カンパリ</span>
                            <span>☘クロム</span>
                            <span>☘けつくん</span>
                            <span>☘ケンスキー</span>
                            <span>☘コゥ</span>
                            <span>☘こんごう</span>
                            <span>☘さいしゅん</span>
                            <span>☘じぇん</span>
                            <span>☘シン</span>
                            <span>☘たけまる</span>
                            <span>☘てんまる</span>
                            <span>☘トミー</span>
                            <span>☘ねむりすい</span>
                            <span>☘ノーバディ</span>
                            <span>☘ひしにゃん</span>
                            <span>☘ひで坊</span>
                            <span>☘ひとっさん</span>
                            <span>☘ぴよぴよ丸</span>
                            <span>☘フィルゼ</span>
                            <span>☘ふうか</span>
                            <span>☘ふうぬ</span>
                            <span>☘ふみ</span>
                            <span>☘ホクホク</span>
                            <span>☘みろく</span>
                            <span>☘もぐら</span>
                            <span>☘やきさばぱん</span>
                            <span>☘ヤドラン</span>
                            <span>☘ヤン</span>
                            <span>☘ゆずりんご</span>
                            <span>☘ゆんすけ</span>
                            <span>☘ラクダ</span>
                            <span>☘リア</span>
                            <span>☘ルーデン</span>
                            <span>☘レンチ</span>
                            <span>☘葵</span>
                            <span>☘甘党侍</span>
                            <span>☘小石　音瑠</span>
                            <span>☘蒼冥</span>
                            <span>☘馳龍-RYU-</span>
                            <span>☘羽山</span>
                            <span>☘白狐丸</span>
                            <span>☘星桜</span>
                            <span>☘和風ミルク</span>
                            <span></span>
                        </div>
                        <p>他 ゆにチル一同</p>
                    </div>
                </div>

                <div style={{
                    width: "200px",
                    height: "100px",
                    margin: "0 auto"
                }}>
                    バナー
                </div>

                <div>
                    <h1>ゆにチル活動記録</h1>
                </div>
            </Container>
        </>
    )
}

// ☘4190kappakun   ☘a1dnoah            ☘himazin03
// ☘HIRA           ☘KOU                ☘Nao
// ☘pacific        ☘Ray                ☘sardonyx
// ☘simira         ☘YUMA               ☘Yuu
// ☘アーガス*      ☘あお               ☘アッピー
// ☘イリエッタ     ☘えべんか だろく    ☘カーマ
// ☘カミュ         ☘カンパリ           ☘クロム
// ☘けつくん       ☘ケンスキー         ☘コゥ
// ☘こんごう       ☘さいしゅん         ☘じぇん
// ☘シン           ☘たけまる           ☘てんまる
// ☘トミー         ☘ねむりすい         ☘ノーバディ
// ☘ひしにゃん     ☘ひで坊             ☘ひとっさん
// ☘ぴよぴよ丸     ☘フィルゼ           ☘ふうか
// ☘ふうぬ         ☘ふみ               ☘ホクホク
// ☘みろく         ☘もぐら             ☘やきさばぱん
// ☘ヤドラン       ☘ヤン               ☘ゆずりんご
// ☘ゆんすけ       ☘ラクダ             ☘リア
// ☘ルーデン       ☘レンチ             ☘葵
// ☘甘党侍         ☘小石　音瑠         ☘蒼冥
// ☘馳龍-RYU-      ☘羽山               ☘白狐丸
// ☘星桜           ☘和風ミルク
// 他 ゆにチル一同