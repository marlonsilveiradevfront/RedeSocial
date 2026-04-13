'use client'


import { login } from "@/app/acoes/login";
import styles from "./login.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { useActionState } from "react";
import Link from "next/link";
 



export default function Login() {
  
  const [state, action] = useActionState(login, null);
  
  
  return (
    <section className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.logo}>Instagram</h1>

        <form action={action} className={styles.form}>
          <input type="text" name="email" placeholder="Telefone, nome de usuário ou email" required/>
          <input type="password" name='password' placeholder="Senha" required/>
          <button type="submit">Entrar</button>
        </form>

        <div className={styles.divider}>
          <span>OU</span>
        </div>

        <a href="#" className={styles.facebookLogin}>
          <FaFacebookSquare size={17} /> Entrar com Facebook
        </a>

        <a href="#" className={styles.forgot}>
          Esqueceu a senha?
        </a>
        {state?.error && <p className={styles.error}>{state.error}</p>}
      </div>
    </section>
  );
}

