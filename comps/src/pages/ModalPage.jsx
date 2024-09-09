import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an importa agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button primary="primary" onClick={handleClick}>
        Open
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
