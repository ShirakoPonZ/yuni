import styles from "../styles/Footer.module.scss";

export const Footer = () => {
    return (
        <footer>
        <h1>プライバシーポリシー</h1>
            <div id={styles.copy}>
                <ul>
                    <li>当サイトはYuNiさんの<strong>非公式</strong>ファンサイトです。</li>
                    <li>TOY'S FACTORY様、YuNiさんご本人、YuNi運営様とは一切関係ありません。</li>
                    <li>当サイトで使⽤している画像の著作権・肖像権等は各権利者に帰属いたします。</li>
                    <li>可能な限り最新かつ正確な情報を記載するよう努めておりますが、誤った情報や古い状態の可能性がございます。</li>
                    <li>問い合わせは Twitter:<a href="https://twitter.com/yuni_unofficial"> @yuni_unofficial</a> までお願いします。</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;