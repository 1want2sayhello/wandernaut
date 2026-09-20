import styles from "./MapCard.module.scss";

export type MapCardItem = {
  image: string;
  name: string;
  description: string;
  schedule?: {
    start: string;
    end: string | null;
  };
  attributes: string[];
};

type MapCardProps = {
  item: MapCardItem;
  onClose: () => void;
};

const MapCard = ({ item, onClose }: MapCardProps) => {
  return (
    <div className={styles.mapCard}>
      <button type="button" onClick={onClose} aria-label="Close">
        X
      </button>
      <div className={styles.cardImg}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.name}> {item.name} </h2>
        <div>
          {item.attributes.map((attribute) => (
            <span key={attribute}>{attribute}</span>
          ))}
        </div>
        <div>
          {item.schedule && (
            <p className={styles.schedule}>
              {item.schedule.start}

              {item.schedule.end && <> – {item.schedule.end}</>}
            </p>
          )}
        </div>

        <p className={styles.description}>{item.description}</p>
        <button type="button"> View More </button>
      </div>
    </div>
  );
};

export default MapCard;
