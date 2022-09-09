// スタイル読み込み
import styles from "../styles/profile.module.scss"

import Image from "next/image";
// 立ち絵読み込み
import origin from "../img/origin.jpg";
import autumn from "../img/autumn.png";
import clear from "../img/clear.png";
import evolve from "../img/evolve.png";
import eternal from "../img/eternal.png";

export default function Profile() {
    return(
        <>
            <h1>Profile</h1>
            <div className={styles.profileContainer}>
                <div className={styles.illust}>
                    <figure style={{ width: "300px"  }}>
                        <Image
                            src={origin}
                            layout="responsive"
                            alt="origin"
                            priority
                        />
                    </figure>

                    <figure style={{ width: "300px"  }}>
                    <Image
                        src={autumn}
                        layout="responsive"
                        alt="origin"
                        priority
                    />
                    </figure>


                    <figure style={{ width: "300px"  }}>
                    <Image
                        src={clear}
                        layout="responsive"
                        alt="origin"
                        priority
                    />
                    </figure>

                    <figure style={{ width: "300px"  }}>
                    <Image
                        src={evolve}
                        layout="responsive"
                        alt="origin"
                        priority
                    />
                    </figure>

                    <figure style={{ width: "300px"  }}>
                    <Image
                        src={eternal}
                        layout="responsive"
                        alt="origin"
                        priority
                    />
                    </figure>
                </div>


                <div className={styles.profile}>
                    <p>profile</p>

                    <img src="" alt="origin" />
                    <img src="" alt="autumn" />
                    <img src="" alt="evolve" />
                    <img src="" alt="eternal" />
                    <img src="" alt="clear" />
                </div>
            </div>
        </>
    )
}