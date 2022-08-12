import React from 'react';
import { useEffect } from 'react';
import { Wrapper } from './App.style';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
  const { loading } = useSelector((state: any) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_ALLPOSTS_REQUEST,
    });
  }, []);

  if (loading) return <LinearProgress />;

  return (
    <Wrapper className='App'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path='/react-typescript-movie-app'
            element={<HomeMain />}
          ></Route>
          <Route
            path='/react-typescript-movie-app/popular'
            element={<PopularMain />}
          ></Route>
          <Route
            path='/react-typescript-movie-app/nowplaying'
            element={<NowplayingMain />}
          ></Route>
          <Route
            path='/react-typescript-movie-app/upcoming'
            element={<UpcomingMain />}
          ></Route>
          <Route
            path='/react-typescript-movie-app/topLate'
            element={<ToplateMain />}
          ></Route>
          <Route
            path='/react-typescript-movie-app/detail'
            element={<MovieDetail />}
          ></Route>
          <Route
            path='/react-typescript-movie-app/search'
            element={<SearchMain />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
