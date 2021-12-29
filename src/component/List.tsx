import { gifInfoType } from "../type"
import { Card } from "./Card"

interface ListType {
    list: gifInfoType[]
}

export const List: React.FC<ListType> = ({list}) => {
    return (
        <div className="images">
            {
                list ? list.map((item) => {
                    return <Card key={item.id} data={item} />
                }) : 'no data'
            }
        </div>
    )
}