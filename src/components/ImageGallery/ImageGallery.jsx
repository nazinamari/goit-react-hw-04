import  ImageCard  from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css'

export default function ImageGallery ({ images, onSelect }) {
    return (
        <ul className={css.gallery__list}>
            {images.map((image) => (
                    <li className={css.gallery__item} key={image.id}>
                        <ImageCard image={image} onSelect={onSelect} />
                    </li>
                )
            )}
        </ul>
    )
}