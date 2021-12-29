import { useState } from "react"

interface SearchType {
    searchHandler: (text: string) => void
}
export const Search: React.FC<SearchType> = ({searchHandler}) => {
    const [text, setText] = useState('')

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const clickHandler = () => {
        if (text.length > 0) searchHandler(text)
    }

    return <div className="search">
        <input type="text" onChange={inputHandler} />
        <input type="button" value="Поиск" onClick={clickHandler} />
    </div>
}