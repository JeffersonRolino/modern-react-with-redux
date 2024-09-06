import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Button primary="primary" onClick={handleClick}>
        Open
      </Button>
      {showModal && <Modal />}
    </div>
  );
}

export default ModalPage;
