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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ullam
        fugiat sunt quam quibusdam repellendus blanditiis! Deleniti, non
        officiis aliquid eius, suscipit adipisci saepe in ad error expedita
        voluptates doloribus aperiam? Accusamus tenetur cum fugit! Ipsum, ipsa.
        Officiis accusantium tempora, alias minima quo dolorem aut, rem enim
        provident tenetur recusandae!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ullam
        fugiat sunt quam quibusdam repellendus blanditiis! Deleniti, non
        officiis aliquid eius, suscipit adipisci saepe in ad error expedita
        voluptates doloribus aperiam? Accusamus tenetur cum fugit! Ipsum, ipsa.
        Officiis accusantium tempora, alias minima quo dolorem aut, rem enim
        provident tenetur recusandae!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ullam
        fugiat sunt quam quibusdam repellendus blanditiis! Deleniti, non
        officiis aliquid eius, suscipit adipisci saepe in ad error expedita
        voluptates doloribus aperiam? Accusamus tenetur cum fugit! Ipsum, ipsa.
        Officiis accusantium tempora, alias minima quo dolorem aut, rem enim
        provident tenetur recusandae!
      </p>
    </div>
  );
}

export default ModalPage;
