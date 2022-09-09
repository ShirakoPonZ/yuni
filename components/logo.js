import Image from "next/image";
import logoImg from "../img/favicon.png"

export default function Logo(){
    return(
        <Image 
            src={logoImg}
            width={100}
            height={100}
            placeholder="blur"
            style={{ transition: "0.2s" }}
            priority
        />
    )
}