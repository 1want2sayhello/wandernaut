import { useState } from "react";
import LocationModal from "./LocationModal/LocationModal";
import wally from "../../assets/graphics/wally/wally-cover.svg";
import lightArrow from "../../assets/icons/light-arrow.svg";
import styles from "./Launch.module.scss";

const Launch = () => {
  const [locationModalOpen, setLocationModalOpen] = useState(false);

  return (
    <>
      <section className={styles.launch}>
        <div className={styles.header}>
          <h1> Wandernaut </h1>
          <p> Discover what's out there </p>
          <button
            type="button"
            className={styles.cta}
            onClick={() => setLocationModalOpen(true)}
          >
            Start Exploring
            <img src={lightArrow} alt="" />
          </button>
        </div>

        <div className={styles.hero}>
          <img src={wally} alt="wally hero" />
        </div>
      </section>

      <LocationModal
        isOpen={locationModalOpen}
        onClose={() => setLocationModalOpen(false)}
      />
    </>
  );
};

export default Launch;
