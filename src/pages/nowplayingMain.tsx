import React from 'react'
import NowplayingList from '../components/nowplayingList';
import NavLayout from '../_layout/navLayout';

const NowplayingMain = () => {
    return (
        <NavLayout>
            <NowplayingList />
        </NavLayout>
    )
}

export default NowplayingMain;