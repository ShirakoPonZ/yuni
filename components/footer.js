import styles from "../styles/footer.module.scss";

export default function Footer() {
    return(
        <div id={styles.copy}>
            <h3>プライバシーポリシー</h3>
            <ul>
                <li>当サイトはYuNiさんの<strong>非公式</strong>ファンサイトです。</li>
                <li>TOY'S FACTORY様と一切関係ありません。</li>
                <li>可能な限り最新かつ正確な情報を記載するよう努めておりますが、誤った情報や古い状態の可能性がございます</li>
                <li>問い合わせは Twitter: @yuni_unofficial までお願いします。</li>
            </ul>
        </div>
    )
}