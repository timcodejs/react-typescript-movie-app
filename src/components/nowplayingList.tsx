import React from 'react';
import { useSelector } from 'react-redux';
import { IMAGE_URL } from '../api/movie-api';
import { useDetail } from '../hook/useDetail';
import { MovieType } from '../types/movieTypes';

const NowplayingList = () => {
  const handler = useDetail(null);
  const { nowplaying } = useSelector((state: any) => state.list.results);

  return (
    <>
      <h3>현재 상영 영화 Top 20</h3>
      <ul className='movie_list'>
        {nowplaying.map((item: MovieType) => (
          <li key={item.id} onClick={() => handler(item)}>
            <div>
              <img src={`${IMAGE_URL}${item.poster_path}`} alt={item.title} />
            </div>
            <div className='movie_text'>
              <p className='movie_title'>{item.title}</p>
              <p>
                {item.release_date
                  .replace(/-/g, '')
                  .replace(/(\d{4})(\d{2})(\d{2})/, `$2월 $3, $1`)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NowplayingList;
