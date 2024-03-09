import css from './ImageCard.module.css'

export default function ImageCard ({ image: {urls, description }, onSelect }) {
    return (
        <div className={css.wrapper} onClick={() => onSelect(
            {
                src: urls.regular,
                description: description,
            })
        }>
            <img className={css.img} src={urls.small} alt={description} />
        </div>
    )
}