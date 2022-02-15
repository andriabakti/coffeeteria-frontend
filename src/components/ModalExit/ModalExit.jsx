import React from 'react'
// pkgs: react-bootstrap
import { Modal } from 'react-bootstrap'
// pkgs: react-router
import { useHistory } from 'react-router-dom'
// styles: module
import style from './ModalExit.module.css'

export const ModalExit = (props) => {
  const history = useHistory()

  const logOut = () => {
    localStorage.removeItem('token')
    alert('Anda berhasil log out')
    history.push('/main')
  }
  return (
    <Modal show={props.show}
      dialogClassName={style['border-radius']}
      className={`${style.modal}`} centered>
      <div className={`${style.modal_box}`}>
        <Modal.Body className={`${style.modal_body}`}>
          Are you sure want to log out ?
        </Modal.Body>
        <div className={`${style.modal_footer}`}>
          <button className={`btn ${style.btn_white}`} type='button' onClick={props.onHide}>
            Cancel
          </button >
          <button className={`btn ${style.btn_brown}`} type='button' onClick={logOut}>
            Log out
          </button>
        </div>
      </div>
    </Modal>
  )
}
