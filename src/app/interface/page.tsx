import Nav from "@/componentes/interComponents/navegation/nav";
import styles from "./interface.module.css";
import Header from "@/componentes/interComponents/storys/header";
import Sugestao from "@/componentes/interComponents/sugstion/sugestao";
import Feed from "@/componentes/interComponents/feed/feed";

export default function Interface() {
  return (
    <section className={`${styles.interContainer}`}>
      <nav className={styles.nav}>
        <Nav />
      </nav>
      <main className={styles.mainContainer}>
        <div className={styles.timeLine}>
          <Feed />
          <Header />
        </div>
        <aside>
          <Sugestao />
        </aside>
      </main>
    </section>
  );
}
