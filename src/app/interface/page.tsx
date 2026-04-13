import Nav from "@/componentes/interComponents/nav";
import styles from './interface.module.css'
import Header from "@/componentes/interComponents/header";

export default function Interface() {

    return (
        <section className={`${styles.interContainer}`}>
            <Nav/>
            <main className={styles.main}>

            <Header/>
            </main>
            
        </section>
    )
}