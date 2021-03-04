import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const Submitting = ({ company_name }) => {
  const [show, setShow] = React.useState(false);

  const handleModel = () => setShow(!show);

  return (
    <>
      <Button variant='success' onClick={handleModel}>
        {company_name ? company_name : 'Unknown company'}
      </Button>
      {/* TODO:Add to model the `CompanyDetails` component after 
    crated. */}
      <Modal show={show} onHide={handleModel} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleModel}>
            Close
          </Button>
          <Button variant='primary' onClick={handleModel}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Submitting;
