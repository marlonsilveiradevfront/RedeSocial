import styles from "./nav.module.css";
import { MdHomeFilled } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";
import { CiSearch, CiHeart, CiInstagram } from "react-icons/ci";
import { FaRegCompass } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import Link from "next/link";

export default function Nav() {
  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href={"/interface"}>
            <CiInstagram size={30} color="white"/>
          </Link>
        </div>

        <ul className={styles.ul}>
          <li>
            <MdHomeFilled size={24} color="white"/>
          </li>
          <li>
            <CiSearch size={24} color="white"/>
          </li>
          <li>
            <FaRegCompass size={24} color="white"/>
          </li>
          <li>
            <FaPlay size={24} color="white"/>
          </li>
          <li>
            <LuSend size={24} color="white"/>
          </li>
          <li>
            <CiHeart size={24} color="white"/>
          </li>
          <li>
            <IoAdd size={24} color="white"/>
          </li>

          <li className={styles.profile}>
            <div className={styles.circle}></div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
