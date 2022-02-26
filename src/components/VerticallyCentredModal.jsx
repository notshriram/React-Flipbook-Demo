import { useState } from 'react';
import {Modal,Button} from 'react-bootstrap';
import Flipbook from './Flipbook';
import '../Modal.css';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Flipbook/>
        </Modal.Body>
      </Modal>
    );
  }
  
  function VerticallyCentredModal() {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
export default VerticallyCentredModal;