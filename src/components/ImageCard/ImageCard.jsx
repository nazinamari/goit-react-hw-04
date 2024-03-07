// import css from './ImageCard.module.css'

export default function ImageCard ({ image: {urls, description }, onSelect }) {
    return (
        <div onClick={() => onSelect(
            {
                src: urls.regular,
                description: description,
            })
        }>
            <img src={urls.small} alt={description} />
        </div>
    )
}