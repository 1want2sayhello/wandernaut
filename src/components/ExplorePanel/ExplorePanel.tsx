import styles from "./ExplorePanel.module.scss";

export type ExploreFilter = "all" | "events" | "places" | "featured";

type ExplorePanelProps = {
  activeFilter: ExploreFilter;
  onFilterChange: (filter: ExploreFilter) => void;
};

const ExplorePanel = ({ activeFilter, onFilterChange }: ExplorePanelProps) => {
  return (
    <section className={styles.explorePanel}>
      <button
        type="button"
        className={styles.panelItems}
        onClick={() => onFilterChange("all")}
      >
        All
      </button>
      <button
        type="button"
        className={`${styles.panelItems} ${
          activeFilter === "events" ? styles.active : ""
        }`}
        onClick={() => onFilterChange("events")}
      >
        Events
      </button>
      <button
        type="button"
        onClick={() => onFilterChange("places")}
        className={`${styles.panelItems} ${
          activeFilter === "places" ? styles.active : ""
        }`}
      >
        Places
      </button>
      <button
        type="button"
        className={styles.panelItems}
        onClick={() => onFilterChange("featured")}
      >
        Featured
      </button>
      <button type="button" className={styles.panelItems}>
        More Filters
      </button>
    </section>
  );
};

export default ExplorePanel;
