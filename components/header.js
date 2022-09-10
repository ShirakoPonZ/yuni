import Image from "next/image";
import HeaderImg from "../img/84.png";


export default function Header() {
    return(
        <header>
            <Image
                src={HeaderImg}
                alt="ヘッダー画像"
                sizes="80vw"
                width={1980}
                height={1150}
                layout="responsive"
                placeholder="blur"
                style={{ transition: "0.2s" }}
            />
        </header>
    )
}