import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { HiOutlineSearch } from 'react-icons/hi';
import { setSearch } from '../Posts/postsSlice';
import './Header.css';
import { FaReddit } from 'react-icons/fa';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const dispatch = useDispatch();

  const onSearchChanged = e => setSearchTerm(e.target.value)

  const onSearchClicked = () => {
    dispatch(setSearch(searchTerm))
    setSearchTerm('')
  }
  
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
          placeholder='Search'
          value={searchTerm}      
          onChange={onSearchChanged}
        />
        <button 
          type="button" 
          aria-label="Search"
          onClick={onSearchClicked}>
          <HiOutlineSearch />
        </button>
      </form>
    </header>
  );
};
  
export default Header;