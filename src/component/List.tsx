import React, { useEffect, useState } from "react"
// import InfiniteScroll from 'react-infinite-scroller';
import InfiniteScroll from "react-infinite-scroll-component";

import {getGifs} from '../api/api';
import { gifInfoType } from "../type"
import { Card } from "./Card"

interface ListType {
    list: gifInfoType[]
    total: number
    searchText: string
    search: (text: string, offset: number) => void
}

export const List: React.FC<ListType> = ({list, search, total, searchText}) => {
    const [offset, setOffset] = useState(0)
    const [state, setstate] = useState<gifInfoType[]>([])
    const [hasMore, sethasMore] = useState(true)

    useEffect(() => {
        setstate(list)            
        onScrollList()
    }, [list])

    const onScrollList = async () => {
        try {
            if (!!(total > offset)) {
                let res = await getGifs(searchText, offset)
                setstate(() => {
                    return [
                        ...state,
                        ...res.data
                    ]
                })
                setOffset(offset + 50)
            } else {
                // sethasMore(false)
            }
        } catch (error) {
            console.log(error);
        }
    }

    console.log(state);
    
    return (
        <div>  
            <InfiniteScroll 
                dataLength={state.length}
                next={onScrollList}
                hasMore={hasMore} 
                loader={<div className="loader" key={0}>Loading ...</div>}
            > 
                <div className="images" >
                {
                    list && state ? state.map((item) => {
                        return <Card key={item.id + Math.random()} data={item} />
                    }) : 'no data'
                }
                </div>

            </InfiniteScroll>
        </div>      
    )
}