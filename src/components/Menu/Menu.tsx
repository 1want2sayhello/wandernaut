import SettingIcon from "../../assets/icons/settings.svg";
import Wally from "../../assets/graphics/wally/wally-with-flag.svg";

import styles from "./Menu.module.scss";

type MenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Menu = ({ isOpen, onClose }: MenuProps) => {
  return (
    <aside className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
      <nav className={styles.menuNav}>
        <button type="button" className={styles.closeBtn} onClick={onClose}>
          X
        </button>
        <span className={styles.item}>My Profile</span>
        <span className={styles.item}> Plan an Outing </span>
        <span className={styles.item}> My Outings </span>
        <span className={styles.item}>
          Settings
          <img src={SettingIcon} alt="" />
        </span>
      </nav>

      <div className={styles.accent}>
        <img src={Wally} alt="wally holding flag" />
      </div>
    </aside>
  );
};

export default Menu;
