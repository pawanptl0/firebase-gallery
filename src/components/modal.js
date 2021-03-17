import React from 'react'

const Modal = ({ selectedImg }) => {

  return (
    <div className="modal fade" id="myModal">
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-body">

            <img src={selectedImg} alt="enlarged pic" className="img-fluid close" data-dismiss="modal" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Modal
