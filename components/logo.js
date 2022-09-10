import Image from "next/image";
import logoImg from "../img/YuNi_.png";

export default function Logo(){
    return(
        <figure style={{ width: "180px" }}>
            <Image 
                src={logoImg}
                layout="responsive"
                placeholder="blur"
                style={{ transition: "0.2s" }}
                priority
            />
        </figure>
    )
}