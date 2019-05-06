/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

const ModalPage = ({
  toggle, modal, className, children,
}) => (
  <Modal isOpen={modal} toggle={toggle} className={className}>
    <ModalBody>{children}</ModalBody>
  </Modal>
);

export default ModalPage;
