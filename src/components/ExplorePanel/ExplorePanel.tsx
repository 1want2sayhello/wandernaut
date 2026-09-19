import styles from "./ExplorePanel.module.scss";

const ExplorePanel = () => {
  return (
    <section className={styles.explorePanel}>
      <div className={styles.panelItems}> Featured </div>
      <div className={styles.panelItems}> Events </div>
      <div className={styles.panelItems}> Places </div>
      <div className={styles.panelItems}> More Filters </div>
    </section>
  );
};

export default ExplorePanel;
