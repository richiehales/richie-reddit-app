import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyData } from '../../store/getSubReddit';
import { nanoid } from '@reduxjs/toolkit'



export function SubReddit() {
  const dispatch = useDispatch();
  const myData = useSelector((state) => state.subReddits.posts.data?.children); // data? - make sure fetched before trying to map

  useEffect(() => {
    dispatch(fetchMyData());
  }, [dispatch]);

  // Render your component with the fetched data
  // ...

  const subRedditButtons = myData && myData.map((item) => (      // mayData && - make sure data is fetched before trying to map
    <button key={nanoid()}>{item.data.display_name}</button>
  ));

  return (
    <div>
      {subRedditButtons}
    </div>
  );
};


