import { gifInfoType } from "../type"

interface CardType {
    data: gifInfoType
}

export const Card: React.FC<CardType> = ({data}) => {
    const {title, images: {preview_gif: {url}}} = data

    return (
        <div className="image">
            <img src={url } alt={title} />
        </div>
    )
}