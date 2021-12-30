import React, { useEffect, useState } from "react"
import InfiniteScroll from 'react-infinite-scroller';
import {getGifs} from '../api/api';
import { gifInfoType } from "../type"
import { Card } from "./Card"

interface ListType {
    list: gifInfoType[]
    total: number
    search: (text: string, offset: number) => void
}

export const List: React.FC<ListType> = ({list, search, total}) => {
    const [offset, setOffset] = useState(0)
    const [state, setstate] = useState<gifInfoType[]>([])

    useEffect(() => {
        setstate(list)            
        onScrollList(offset)
    }, [list])

    const onScrollList = async (of) => {
        try {
            if (!!(total > of)) {
                // search('cat', of)
                let res = await getGifs('cat', of)
                console.log(res.data);
                setstate((prev) => {
                    return [
                        ...prev,
                        ...res.data
                    ]
                } )
            }
        } catch (error) {
            
        }
    }

    console.log(state);
    console.log(list);
    

    return (
        <div>  
            <InfiniteScroll 
                pageStart={0} 
                loadMore={() => onScrollList(offset + 50)}
                hasMore={true || false} 
                useWindow={false} 
                loader={<div className="loader" key={0}>Loading ...</div>}
            > 
                <div className="images" >
                {
                    list ? state.map((item) => {
                        return <Card key={item.id} data={item} />
                    }) : 'no data'
                }
                </div>

            </InfiniteScroll>
        </div>      
    )
}