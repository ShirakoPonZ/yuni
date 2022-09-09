import { NavPages } from "../components/nav";
import YouTube from "react-youtube";

export default function Music(){
    return(
        <>
            <NavPages />

            <div className="">
                <h1>music</h1>

                <h2>Original</h2>


                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <div>
                        <h2>曲名</h2>
                        <p>本文</p>
                    </div>

                    <YouTube videoId="kHk9qBGTnh8" />
                </div>
                <a href="#">サブスクリンク</a>


                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <div>
                        <h2>曲名</h2>
                        <p>本文</p>
                    </div>

                    <YouTube videoId="LjkDJHk2KrE" />
                </div>
            </div>
        </>
    )
}