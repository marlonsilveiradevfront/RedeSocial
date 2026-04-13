import styles from './feed.module.css'
import { Heart, MessageCircle, Bookmark, Send } from 'lucide-react';

const feedUser = [
    {
        id: 0,
        usuario: 'marlin',
        avatar: 'https://i.pravatar.cc/300',
        imagem: 'https://picsum.photos/600/600',
        curtidas: 120,
        legenda: 'Explorando o Next.js',
        tempo: 'HÁ 2 HORAS'

    },

     {
        id: 1,
        usuario: 'Bus',
        avatar: '',
        imagem: 'https://picsum.photos/600/601',
        curtidas: 86,
        legenda: 'Eu sou o Bus e me amo "gay"',
        tempo: 'HÁ 56 MINUTOS'

    }
]


export default function Feed() {

    return (
        <section className={styles.container}>
           {feedUser.map((feed) => (
            <div key={feed.id} className={styles.post}>

                <header className={styles.header}>
                    <div className={styles.info}>
                        <div className={styles.avatar}>
                            {feed.avatar && <img src={feed.avatar} alt={feed.usuario} />}
                        </div>
                        <span className={styles.username}>{feed.usuario}</span>
                    </div>
                    <button className={styles.mais}>•••</button>
                </header>

                <div className={styles.imagem}>
                    <img src={feed.imagem} alt="Conteudo do Post" />
                </div>

                <div className={styles.interacao}>
                    <div className={styles.iconsLeft}>
                        <Heart size={24} className={styles.icon} />
                        <MessageCircle size={24} className={styles.icon} />
                        <Send size={24} className={styles.icon} />
                    </div>
                    <Bookmark size={24} className={styles.icon} />
                </div>

                <div className={styles.coments}>
                    <p className={styles.like}>{feed.curtidas}</p>
                    <p className={styles.caption}>
                        <strong>{feed.usuario}</strong>{feed.legenda}
                    </p>
                    <span className={styles.tempo}>{feed.tempo}</span>
                </div>
            </div>
           ))}
        </section>
    )
}