import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyData } from '../../store/getSubReddit';
import { setSelectedSubreddit } from '../Posts/postsSlice';
import './subReddit.css';



export function SubReddit() {
  const dispatch = useDispatch();
  const myData = useSelector((state) => state.subReddits.posts.data?.children); // data? - make sure fetched before trying to map

  const handleSelectSlice = (buttonId) => {
    dispatch(setSelectedSubreddit(buttonId));
  }; 

  useEffect(() => {
    dispatch(fetchMyData());
  }, [dispatch]);

  const subRedditButtons = myData && myData.map((item) => (      // mayData && - make sure data is fetched before trying to map
    <div key={item.data.display_name} className='buttons'>
      <button onClick={() => handleSelectSlice(item.data.display_name_prefixed)}>
        {item.data.display_name}
      </button>
    </div>
  ));

  return (
    <div className='subReddits'>
      {subRedditButtons}
    </div>
  );
};


