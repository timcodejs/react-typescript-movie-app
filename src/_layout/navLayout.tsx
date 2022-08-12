import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
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
      navigate('/movieapp/search');
    },
    [name]
  );

  return (
    <div>
      <ul className='nav'>
        <li>
          <Button variant='contained' color='primary'>
            <Link to='/movieapp'>Home</Link>
          </Button>
        </li>
        <li>
          <Button variant='contained' color='primary'>
            <Link to='/movieapp/popular'>인기</Link>
          </Button>
        </li>
        <li>
          <Button variant='contained' color='primary'>
            <Link to='/movieapp/nowplaying'>현재 상영 중</Link>
          </Button>
        </li>
        <li>
          <Button variant='contained' color='primary'>
            <Link to='/movieapp/upcoming'>개봉 예정</Link>
          </Button>
        </li>
        <li>
          <Button variant='contained' color='primary'>
            <Link to='/movieapp/topLate'>높은 평점</Link>
          </Button>
        </li>
        <li>
          <form onSubmit={submit}>
            <TextField
              id='standard-basic'
              label='영화 이름 검색'
              variant='standard'
              value={name}
              onChange={handler}
            />
            <Button variant='contained' type='submit' color='primary'>
              검색
            </Button>
          </form>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default NavLayout;
