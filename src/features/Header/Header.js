import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineSearch } from 'react-icons/hi';
import { setSearch } from '../Posts/postsSlice';
import { fetchSearchData } from '../Posts/getPosts';
import { setButtons } from '../Comments/commentsSlice';
import './Header.css';
import { FaReddit } from 'react-icons/fa';

const Header = () => {
  console.log('Header Function Rendered')
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch();
  const searchItem = useSelector((state) => state.posts.searchTerm);
  
  const onSearchChanged = e => setSearchTerm(e.target.value)

  const onSearchClicked = () => {
    dispatch(setSearch(searchTerm))
    dispatch(setButtons('Show Comments'));
    setSearchTerm('') 
  }
  
  useEffect(() => {
    //console.log('Search useEffect Run')
    dispatch(fetchSearchData(searchItem));          
  }, [dispatch, searchItem])
    
  return (
    <header>
      <div className="logo">
        <FaReddit className="logo-icon" />
        <p>
          Reddit<span>Richie Edition</span>
        </p>
      </div>
      <form className="search">
        <input
          type="text"
          aria-label="Search posts"
          placeholder='Search Reddit'
          value={searchTerm}      
          onChange={onSearchChanged}
        />
        <Link 
        to="/" >  
          <button 
            type="button" 
            aria-label="Search"
            onClick={onSearchClicked}>
            <HiOutlineSearch />
          </button>
        </Link>
      </form>
    </header>
  );
};
  
export default Header;