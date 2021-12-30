import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { getGifsList, updateGifsList } from './redux/reducer';
import { List } from './component/List';
import { Search } from './component/Search';
import { Header } from './component/Header';

function App() {
  const dispatch = useAppDispatch()
  const {gifsList, loading, error, total} = useAppSelector(state => state.reducer)
  useEffect(() => {
    dispatch(getGifsList({search: 'cat', offset: 0}))
  }, [])

  const search = (text: string, offset: number) => {
    dispatch(updateGifsList({search: text, offset: offset}))
  }

  return (
    <div className="App">
      <Header />
      <Search searchHandler={search}/>
      {
        gifsList && <List list={gifsList} search={search} total={total} />
      }
      
    </div>
  );
}

export default App;
