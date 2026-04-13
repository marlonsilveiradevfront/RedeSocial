import styles from "./login.module.css";
import { FaFacebookSquare } from "react-icons/fa";


export default function Login() {
  return (
    <section className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.logo}>Instagram</h1>

        <form className={styles.form}>
          <input type="text" placeholder="Telefone, nome de usuário ou email" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </form>

        <div className={styles.divider}>
          <span>OU</span>
        </div>

        <a href="#" className={styles["facebook-login"]}>
          <FaFacebookSquare size={17} /> Entrar com Facebook
        </a>

        <a href="#" className={styles.forgot}>
          Esqueceu a senha?
        </a>
      </div>
    </section>
  );
}
