import { useState } from "react";
import Map from "../../components/Map/Map";
import Menu from "../../components/Menu/Menu";
import ExplorePanel from "../../components/ExplorePanel/ExplorePanel";

import plotIcon from "../../assets/icons/plot.svg";
import addIcon from "../../assets/icons/add.svg";

import styles from "./Explore.module.scss";

const Explore = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClose = () => setMenuOpen(false);

  return (
    <section className={styles.explore}>
      <button type="button" className={styles.createPlotBtn}>
        <span className={styles.iconContainer}>
          <img src={plotIcon} alt="" />
          <img className={styles.addIcon} src={addIcon} alt="" />
        </span>
      </button>
      <button
        type="button"
        className={styles.menuBtn}
        onClick={handleMenuClick}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      {menuOpen && (
        <div className={styles.backdrop} onClick={handleClose}></div>
      )}
      <Menu isOpen={menuOpen} onClose={handleClose} />
      <Map />
      <ExplorePanel />
    </section>
  );
};

export default Explore;
