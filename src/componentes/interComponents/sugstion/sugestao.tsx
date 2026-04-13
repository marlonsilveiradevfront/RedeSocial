import styles from './sugestao.module.css'
import usuarios from "@/app/data/user.json";

export default function Sugestao() {

const usuarioLogado = {
    id: 1,
    nome: "Marlin",
    seguindo: [2]
}

 

    return (
        <section className={styles.sugestionBar}>
            <div>

            </div>
        </section>
    )
}