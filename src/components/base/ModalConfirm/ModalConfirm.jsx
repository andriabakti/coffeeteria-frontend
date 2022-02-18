import React from 'react'
// pkgs: react-bootstrap
import { Modal } from 'react-bootstrap'
// styles: module
import style from './ModalConfirm.module.css'

export const ModalConfirm = (props) => {
  return (
    <Modal
      show={props.show}
      dialogClassName={style['border-radius']}
      className={`${style.modal}`}
      centered>
      <div className={`${style.modal_box}`}>
        <Modal.Body className={`${style.modal_body}`}>
          Are you sure want to {props.text} ?
        </Modal.Body>
        <div className={`${style.modal_footer}`}>
          <button
            className={`btn ${style.btn_white}`}
            type='button'
            onClick={props.onHide}>
            {props.btnBack}
          </button>
          <button
            className={`btn ${style.btn_brown}`}
            type='button'
            onClick={props.eventClick}>
            {props.btnConfirm}
          </button>
        </div>
      </div>
    </Modal>
  )
}
