import  ImageCard  from '../ImageCard/ImageCard';

export default function ImageGallery ({ images }) {
    return (
        <ul>
            {images.map(({id, urls}) => (
                    <li key={id}>
                        <ImageCard urls={urls} />
                    </li>
                )
            )}
        </ul>
    )
}