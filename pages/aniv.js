import Image from "next/image";
import ilandImg from "../img/yuni_laird.jpg"
import { NavPages } from "../components/nav";
import Container from "../components/container";

// import styles from "";

export default function Aniv(){
    return(
        <>
            <NavPages />
            <Container>
            {/* 二列スタイルを適用 */}
            <div style={{ display: "flex" }}>
                <figure style={{ width: "50vw", height: "400px", backgroundColor: "blue" }}>
                    <Image
                        src={ilandImg}
                        layout="responsive"
                        alt="贈呈書"
                    />
                </figure>

                <div>
                    {/* <h1>♪YuNiBirth記念企画♪</h1>

                    <p>誕生日を祝して「スコットランド デュナンズ城城主の権利」を進呈します。</p>
                    <p>制定日: 2022年10月1日</p>
                    <p>今後のご健康とご多幸を、心よりお祈り申し上げます。</p> */}
                </div>
            </div>

            <div>
                画像入る
            </div>

            <div>
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