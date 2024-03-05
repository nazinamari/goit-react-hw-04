import ReactModal from 'react-modal';
import css from './ImageModal.module.css';
// import { useToggle } from "../../hooks/useToggle";

ReactModal.setAppElement(document.getElementById('root'));

export default function ImageModal ({isOpen, image, onChange}) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={() => onChange(false)}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            preventScroll={true}
            className={css.modal}
            overlayClassName={`${css.overlay} ${isOpen ? css.overlayIsOpen : '' }`}
            >
            <img src={image.src} className={css.img} />
            <p className={css.text}>{image.description}</p>
        </ReactModal>
    )
}
