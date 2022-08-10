import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IMAGE_URL } from '../api/movie-api';
import NavLayout from '../_layout/navLayout';
import { MovieType } from '../types/movieTypes';
import { castType, crewType } from '../types/creditsTypes';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import { CREDITS_ALLPOSTS_REQUEST } from '../types/creditsTypes';

const MovieDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { loading } = useSelector((state: any) => state.credits);
  const { credits } = useSelector((state: any) => state.credits.results);
  const movie = location.state as MovieType; // state의 타입이 unknown이므로 파라미터값의 타입을 지정해주면 된다.

  useEffect(() => {
    dispatch({
      type: CREDITS_ALLPOSTS_REQUEST,
      payload: {
        movie_id: movie.id,
      },
    });
  }, []);

  if (loading) return <LinearProgress />;

  return (
    <NavLayout>
      {movie ? (
        <MovieDetailStyled color={movie.backdrop_path}>
          <div className='bg'></div>
          <div className='detail-wrap'>
            <div className='movie-inner'>
              <p>{movie.title}</p>
              <p>{movie.original_title}</p>
              <div>
                <img
                  src={`${IMAGE_URL}${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            </div>
            <div className='movie-info'>
              <p>
                <b>개봉일</b> :{' '}
                {movie.release_date
                  .replace(/-/g, '')
                  .replace(/(\d{4})(\d{2})(\d{2})/, `$2월 $3, $1`)}
              </p>
              <p>
                <b>평&nbsp;&nbsp;&nbsp;점</b> : {movie.vote_average}점
              </p>
              <p className='synopsis'>
                <b>줄거리</b> : <br />
                {movie.overview}
              </p>
              <p>
                <b>감&nbsp;&nbsp;&nbsp;독</b> :&nbsp;
                {credits.crew.map((item: crewType) => (
                  <b key={Math.random()}>
                    {item.job === 'Director' && (
                      <span key={item.id}>{item.name}</span>
                    )}
                  </b>
                ))}
              </p>
              <p>
                <b>출&nbsp;&nbsp;&nbsp;연</b> : <br />
                {credits.cast.map((item: castType) => (
                  <b key={Math.random()} className='crew'>
                    {item.order === 0 && (
                      <span>
                        {item.name},<br />
                      </span>
                    )}
                    {item.order === 1 && (
                      <span>
                        {item.name},<br />
                      </span>
                    )}
                    {item.order === 2 && (
                      <span>
                        {item.name},<br />
                      </span>
                    )}
                    {item.order === 3 && (
                      <span>
                        {item.name},<br />
                      </span>
                    )}
                    {item.order === 4 && (
                      <span>
                        {item.name},<br />
                      </span>
                    )}
                    {item.order === 5 && <span>{item.name} </span>}
                  </b>
                ))}
              </p>
            </div>
          </div>
        </MovieDetailStyled>
      ) : (
        <h1>표시항목 없음</h1>
      )}
    </NavLayout>
  );
};

export default MovieDetail;

const MovieDetailStyled = styled.div`
  text-align: left;
  color: #fff;

  & p {
    padding: 0;
  }

  .bg {
    position: absolute;
    z-index: 10;
    width: 99vw;
    height: 93vh;
    background: url(${IMAGE_URL}${(props) => props.color}) no-repeat center
      top/cover;
  }

  .detail-wrap {
    width: 99vw;
    height: 93vh;
    position: absolute;
    z-index: 100;
    display: flex;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .detail-wrap div:nth-child(1) {
    margin: 0 30px;
  }

  .movie-inner p:nth-child(1) {
    font-size: 30px;
    font-weight: 600;
    line-height: 28px;
    margin-top: 20px;
  }

  .movie-inner p:nth-child(2) {
    margin-bottom: 15px;
  }

  .movie-info {
    width: 700px;
    margin-top: 60px;
  }

  .movie-info p {
    margin: 20px 0;
    font-size: 18px;
  }

  .synopsis {
    line-height: 30px;
  }

  & img {
    width: 400px;
    margin-bottom: 20px;
  }
  .crew span {
    line-height: 30px;
  }
`;
