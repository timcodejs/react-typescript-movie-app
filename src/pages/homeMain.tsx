import React from 'react';
import NowplayingList from '../components/nowplayingList';
import PopularList from '../components/popularList';
import TopLateList from '../components/topLateList';
import UpcomingList from '../components/upcomingList';
import NavLayout from '../_layout/navLayout';

const HomeMain = () => {
  return (
    <NavLayout>
      <PopularList />
      <NowplayingList />
      <UpcomingList />
      <TopLateList />
    </NavLayout>
  );
};

export default HomeMain;
