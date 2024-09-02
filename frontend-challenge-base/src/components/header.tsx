import Link from "next/link";
import styles from "../app/css/Header.module.css";
import Image from "next/image";
import iconLogin from "../../public/images/icon-login.svg";
import logo from "../../public/images/logo.png";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Image
        src={logo}
        height={100}
        width={100}
        alt="Logo"
        className={styles.imgLogo}
      />
      <ul className={styles.menu}>
        <li>
          <Link href="#" className={styles.menuItem}>
            Popular
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.menuItem}>
            Favorite
          </Link>
        </li>
      </ul>
      <div className={styles.btnLogin}>
        <Image
          src={iconLogin}
          height={100}
          width={100}
          alt="Icon Login"
          className={styles.imgLogin}
        />
      </div>
    </div>
  );
};
