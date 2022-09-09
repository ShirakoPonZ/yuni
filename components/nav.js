import Link from "next/link";
import {Link as Scroll} from "react-scroll";

import styles from "../styles/nav.module.scss";

import Logo from "./logo";
import FlexContainer from "./flexContainer";
import Container from "./container";


export default function Nav(){
    return(
    <>
        <FlexContainer>
            <Logo />
            <nav className={styles.menu}>
                <ul>
                    <li><Scroll to="/" smooth={true} duration={300} offset={0}>Top</Scroll></li>
                    <li><Scroll to="clips" smooth={true} duration={300} offset={0}>clips</Scroll></li>
                    <li><Link href="/music"><a>楽曲</a></Link></li>
                    <li><Link href="/aniv"><a>ゆにチル記録</a></Link></li>
                    <li><Scroll to="staffs" smooth={true} duration={300} offset={0}>staffs</Scroll></li>
                </ul>
            </nav>
        </FlexContainer>
    </>
    )
}

// 
export function NavPages(){
    return(
        <FlexContainer>
            <Container large>
            {/* ロゴ */}
            <Logo />

            <nav className={styles.menu}>
                <ul>
                    <li><Link href="/"><a>Top</a></Link></li>
                    <li><Link href="/"><a>clips</a></Link></li>
                    <li><Link href="/music"><a>楽曲</a></Link></li>
                    <li><Link href="/aniv"><a>ゆにチル記録</a></Link></li>
                    <li><Link href="/"><a>staffs</a></Link></li>
                </ul>
            </nav>
            </Container>
        </FlexContainer>
    )
}