import ReactModal from 'react-modal';
import css from './ImageModal.module.css';

ReactModal.setAppElement(document.getElementById('root'));

export default function ImageModal ({isOpen, image, onClose}) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            preventScroll={true}
            className={css.modal}
            overlayClassName={`${css.overlay} ${isOpen ? css.overlayIsOpen : '' }`}
            >
            <img src={image.src} className={css.img} />
            {/* <p className={css.text}>{image.description}</p> */}
            <button onClick={onClose}>close</button>
        </ReactModal>
    )
}
