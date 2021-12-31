import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { getGifsList, setSearch, updateGifsList } from './redux/reducer';
import { List } from './component/List';
import { Search } from './component/Search';
import { Header } from './component/Header';

function App() {
  const dispatch = useAppDispatch()
  const {gifsList, loading, error, total, search} = useAppSelector(state => state.reducer)
  useEffect(() => {
    dispatch(getGifsList({search, offset: 0}))
  }, [])

  const searchHandler = (text: string, offset: number) => {
    dispatch(updateGifsList({search: text, offset: offset}))
    dispatch(setSearch(text))
  }

  return (
    <div className="App">
      <Header />
      <Search searchHandler={searchHandler}/>
      {
        gifsList && <List list={gifsList} search={searchHandler} searchText={search} total={total} />
      }
      
    </div>
  );
}

export default App;
