import { useNavigate } from "react-router-dom";
import styles from "./LocationModal.module.scss";
import Modal from "../../../components/Modal/Modal";

type LocationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LocationModal = ({ isOpen, onClose }: LocationModalProps) => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/explore");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.content}>
        <button className={styles.closeBtn} onClick={onClose}>
          X
        </button>
        <h2> We'll need your location to start! </h2>
        <button
          type="button"
          className={styles.pillBtn}
          onClick={handleContinue}
        >
          Use My Location
        </button>
        <button
          type="button"
          className={styles.pillBtn}
          onClick={handleContinue}
        >
          Select a City
        </button>
        <button type="button" className={styles.backBtn} onClick={onClose}>
          No, thanks.
        </button>
      </div>
    </Modal>
  );
};

export default LocationModal;
