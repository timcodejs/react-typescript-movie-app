import React from 'react';
import { useSelector } from 'react-redux';
import { IMAGE_URL } from '../api/movie-api';
import { useDetail } from '../hook/useDetail';
import { SearchType } from '../types/scarchTypes';
import styled from 'styled-components';
import { query } from '../saga/search';

const SearchList = () => {
  const handler = useDetail(null);
  const { search } = useSelector((state: any) => state.search.results);

  return (
    <>
      <h3>검색 결과 : {query}</h3>
      <SearchListStyled>
        {search.map((item: SearchType) => (
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
      </SearchListStyled>
    </>
  );
};

export default SearchList;

const SearchListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
