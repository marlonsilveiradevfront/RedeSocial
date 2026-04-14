import styles from './loginCriar.module.css'

export default function Cadastro() {
    return (
        <section className={styles.section}>
            <div className={styles.card}>
                
                <div className={styles.titulo}>
                    <h1>Instagram</h1>
                    <p>Cadastre-se para ver fotos e vídeos dos seus amigos.</p>
                </div>

                <button className={styles.fbbutton}>
                    Entrar com o Facebook
                </button>

                <div className={styles.divisor}>
                    <span></span>
                    <p>OU</p>
                    <span></span>
                </div>
                
                <form className={styles.dados}>
                    <input type="text" placeholder='Número do celular ou email'/>
                    <input type="text" placeholder='Nome completo'/>          
                    <input type="text" placeholder='Nome de usuário'/>
                    <input type="password" placeholder='Senha' required/>

                    <button className={styles.cadbutton}>
                        Cadastre-se
                    </button>
                </form>
                 
                <p className={styles.termos}>
                    Ao se cadastrar, você concorda com nossos Termos, Política de Dados e Política de Cookies.
                </p>

            </div>
        </section>
    )
}











           
      