import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { IMAGE_URL } from '../api/movie-api';
import { useDetail } from '../hook/useDetail';
import { MovieType } from '../types/movieTypes';
// import Box from '@mui/material/Grid';
// import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const PopularList = () => {
  const ulRef = useRef<HTMLUListElement>(null);
  const handler = useDetail(null);
  const { popular } = useSelector((state: any) => state.list.results);

  useEffect(() => {
    // 👉️ ref could be null here
    if (ulRef.current != null) {
      // 👉️ TypeScript knows that ref is not null here
      console.log(ulRef);
    }
  }, []);

  return (
    <>
      <h3>인기 영화 Top 20</h3>
      {/* <Box className='list-box'>
        <button className='list-btn'>
          <ArrowCircleLeftIcon color='primary' fontSize='large' />
        </button>
        <button className='list-btn'>
          <ArrowCircleRightIcon color='primary' fontSize='large' />
        </button>
      </Box> */}
      <ul className='movie_list' ref={ulRef}>
        {popular.map((item: MovieType) => (
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

export default PopularList;
