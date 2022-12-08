import Link from "next/link";

import React from 'react'

export const Nav = () => {
    return (
        <nav className={navigation}>
            <ul>
                <Link href={""}>Top</Link>
                <Link href={""}>Music</Link>
                <Link href={""}>YuNiBirth</Link>
                <Link href={""}>Clips</Link>
            </ul>
        </nav>
    )
}
export default Nav;

