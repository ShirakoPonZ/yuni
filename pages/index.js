import Header from "../components/header";
import Nav from "../components/nav";
import Profile from "../components/Profile";
import Links from "../components/links";
import Clips from "../components/clips";
import Staff from "../components/staff";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>

        {/* ナビゲーション */}
        <Nav />

        {/* YuNiプロフィール */}
        <Profile />

        {/* 各種リンク */}
        <Links />

        {/* Twitter切り抜き */}
        <Clips />

        <div>
          music
        </div>

        {/* スタッフ */}
        <Staff />

      </main>

      <Footer />
    </>
  )
}