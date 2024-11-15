import React from 'react';
import { Modal } from 'react-bootstrap';

function UpdateStatusModal() {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'center' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Update Order Status for Order ID </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    
                </Modal.Body>
            </Modal.Dialog>

        </div>
    )
}

export default UpdateStatusModal