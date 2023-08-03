import { Logo } from "../svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.content}>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
