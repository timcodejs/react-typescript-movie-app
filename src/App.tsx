import React from 'react';
import { useEffect } from 'react';
import { Wrapper } from './App.style';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LOAD_ALLPOSTS_REQUEST } from './types/movieTypes';
import { useDispatch, useSelector } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import HomeMain from './pages/homeMain';
import PopularMain from './pages/popularMain';
import NowplayingMain from './pages/nowplayingMain';
import UpcomingMain from './pages/upcomingMain';
import ToplateMain from './pages/toplateMain';
import MovieDetail from './components/movieDetail';
import SearchMain from './pages/searchMain';

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: any) => state.list);

  useEffect(() => {
    dispatch({
      type: LOAD_ALLPOSTS_REQUEST,
    });
  }, []);

  if (loading) return <LinearProgress />;

  return (
    <Wrapper className='App'>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<HomeMain />}></Route>
          <Route path='/popular' element={<PopularMain />}></Route>
          <Route path='/nowplaying' element={<NowplayingMain />}></Route>
          <Route path='/upcoming' element={<UpcomingMain />}></Route>
          <Route path='/topLate' element={<ToplateMain />}></Route>
          <Route path='/detail' element={<MovieDetail />}></Route>
          <Route path='/search' element={<SearchMain />}></Route>
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;
