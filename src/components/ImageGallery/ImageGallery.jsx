import { ImageCard } from "../ImageCard/ImageCard"

export default function ImageGallery ({items}) {
    return (
        <ul>
	{items.map}
	<li>
		<ImageCard  />
	</li>
</ul>
    )
}