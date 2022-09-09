import Nav from "../components/nav";
import Profile from "../components/Profile";
import Links from "../components/links";
import Clips from "../components/clips";
import Staff from "../components/staff";

export default function Home() {
  return (
    <>
      <main>

        {/* ナビゲーション */}
        <Nav />

        {/* YuNiプロフィール */}
        <Profile />

        {/* 各種リンク */}
        <Links />

        {/* Twitter切り抜き */}
        <Clips />

        {/* スタッフ */}
        <Staff />

      </main>
    </>
  )
}