import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { getGifsList } from './redux/reducer';
import { List } from './component/List';
import { Search } from './component/Search';
import { Header } from './component/Header';

function App() {
  const dispatch = useAppDispatch()
  const {gifsList, loading, error} = useAppSelector(state => state.reducer)
  useEffect(() => {
    dispatch(getGifsList('cat'))
  }, [])

  const search = (text: string) => {
    dispatch(getGifsList(text))
  }

  return (
    <div className="App">
      <Header />
      <Search searchHandler={search}/>
      <List list={gifsList} />
    </div>
  );
}

export default App;
