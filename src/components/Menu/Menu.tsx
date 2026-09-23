import { useState } from "react";
import { Link } from "react-router-dom";

import SettingIcon from "../../assets/icons/settings.svg";
import Wally from "../../assets/graphics/wally/wally-on-moon.svg";

import styles from "./Menu.module.scss";

type MenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Menu = ({ isOpen, onClose }: MenuProps) => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <div
      className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ""}`}
      onClick={onClose}
    >
      <aside
        className={`${styles.menu} ${isOpen ? styles.open : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.closeButton}>
          <button type="button" onClick={onClose}>
            X
          </button>
        </div>

        <div className={styles.content}>
          <nav>
            <Link to={"/"}> My Profile </Link>
            <Link to={"/"}> Plot An Outing</Link>
            <Link to={"/"}> My Outings </Link>
            <Link to={"/"}> Favorite Spots </Link>
            <Link to={"/"}> About </Link>
          </nav>

          <div className={styles.settings}>
            <div className={styles.header}>
              <h3> Settings </h3>
              <img src={SettingIcon} alt="" />
            </div>
            <div className={styles.toggle}>
              <div className={styles.slider}></div>
            </div>
          </div>

          <div className={styles.accent}>
            <img src={Wally} alt="Wally on the moon" />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Menu;
