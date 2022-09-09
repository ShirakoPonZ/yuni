import {Link as Scroll} from "react-scroll";

import styles from "../styles/nav.module.scss";

import Logo from "./logo";
import FlexContainer from "./flexContainer";


export default function Nav(){
    return(
        <FlexContainer>
            {/* ロゴ */}
            <Logo />

            <nav className={styles.menu}>
                <ul>
                    <Scroll to="header" smooth={true} duration={100} offset={0}>Top</Scroll>
                    <li>トップ</li>
                    <li>切り抜き</li>
                    <li>楽曲</li>
                    <li>ゆにチル記録</li>
                    <li>スタッフ</li>
                </ul>
            </nav>
        </FlexContainer>
    )
}