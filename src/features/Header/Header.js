import { HiOutlineSearch } from 'react-icons/hi';
import './Header.css';
import { FaReddit } from 'react-icons/fa';


const Header = () => {

  
    return (
      <header>
        <div className="logo">
          <FaReddit className="logo-icon" />
          <p>
            Reddit<span>Minimal</span>
          </p>
        </div>
        <form className="search">
          <input
            type="text"
            placeholder="Search"
            aria-label="Search posts"
          />
          <button type="submit" aria-label="Search">
            <HiOutlineSearch />
          </button>
        </form>
      </header>
    );
  };
  
  export default Header;