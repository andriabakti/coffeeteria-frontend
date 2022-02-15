import React from 'react';
// react-bootstrap
import { Modal } from 'react-bootstrap'
import style from './ModalDelete.module.css'

export const ModalDelete = (props) => {
  return (
    <Modal show={props.show}
      dialogClassName={style['border-radius']}
      className={`${style.modal}`} centered>
      <div className={`${style.modal_box}`}>
        <Modal.Body className={`${style.modal_body}`}>
          Are you sure want to delete this product ?
        </Modal.Body>
        <div className={`${style.modal_footer}`}>
          <button className={`btn ${style.btn_white}`} type='button' onClick={props.onHide}>
            Cancel
          </button >
          <button className={`btn ${style.btn_brown}`} type='button' onClick={props.deleteItem}>
            Delete
          </button>
        </div>
      </div>
    </Modal>
  )
};