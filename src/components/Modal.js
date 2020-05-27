import React from 'react';function Modal({ title, close, active, children}) {  const modalClassName = active ? "modal modal--active" : "modal";      return (    <div className={modalClassName}>      <div className="modal__box">	    <div className="modal__title">{title}</div>	    <div className="modal__content">	      {children}		</div>		    <button onClick={close} className="button button--close" aria-label="close"><span className="visually-hidden">Close</span></button>			  </div>	  <div className="modal__overlay"></div>    </div>  );}export default Modal;