import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SEARCH_ALLPOSTS_REQUEST } from '../types/scarchTypes';

const NavLayout = ({ children }: React.PropsWithChildren<unknown>) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');

  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const submit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch({
        type: SEARCH_ALLPOSTS_REQUEST,
        payload: {
          query: name,
        },
      });
      navigate('/search');
    },
    [name]
  );

  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/popular'>인기</Link>
        </li>
        <li>
          <Link to='/nowplaying'>현재 상영 중</Link>
        </li>
        <li>
          <Link to='/upcoming'>개봉 예정</Link>
        </li>
        <li>
          <Link to='/topLate'>높은 평점</Link>
        </li>
        <li>
          <form onSubmit={submit}>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='영화 이름 검색'
              value={name}
              onChange={handler}
            />
            <button type='submit'>검색</button>
          </form>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default NavLayout;
