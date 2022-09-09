import Image from "next/image";
import { NavPages } from "../components/nav";

export default function Aniv(){
    return(
        <>
            <NavPages />

            {/* 二列スタイルを適用 */}
            <div style={{ display: "flex" }}>
                <figure style={{ width: "50vw", height: "400px", backgroundColor: "blue" }}>
                    <Image
                        src=""
                        layout="responsive"
                        alt="贈呈書"
                    />
                </figure>

                <h1>概要</h1>
            </div>

            <div>
                画像入る
            </div>

            <div>
                記録記入
            </div>
        </>
    )
}