import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineSearch } from 'react-icons/hi';
import { setSearch } from '../Posts/postsSlice';
import { fetchSearchData } from '../Posts/getPosts';
import { setButtons } from '../Comments/commentsSlice';
import './Header.css';
import { FaReddit } from 'react-icons/fa';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch();
  const searchItem = useSelector((state) => state.posts.searchTerm);
  const linkRef = useRef();
  
  const onSearchChanged = e => setSearchTerm(e.target.value)

  const onSearchClicked = () => {
    dispatch(setSearch(searchTerm));
    dispatch(setButtons('Show Comments'));
    setSearchTerm('');
  }

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      onSearchClicked();
      if (linkRef.current) {
        linkRef.current.click(); // Programmatically trigger the Link click event
      }
    }
  };
  
  useEffect(() => {
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
      <form>
        <input
          className="search"
          type="text"
          aria-label="Search posts"
          placeholder='Search Reddit'
          value={searchTerm}      
          onChange={onSearchChanged}
          onKeyDown={handleEnterKeyPress}/>
        <Link to="/" ref={linkRef}>  
          <button
            className="button" 
            type="button" 
            aria-label="Search"
            onClick={onSearchClicked}>
              <HiOutlineSearch/>
          </button>
        </Link>
      </form>
    </header>
  );
};
  
export default Header;