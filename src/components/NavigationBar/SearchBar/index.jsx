import {
    FaSearch,
    FaArrowLeft,
    FaArrowRight,
} from 'react-icons/fa';
import './index.css';

const SearchBar = () => {
    return (
        <div className='search-bar'>
          <BackButton />
          <ForwardButton />
          <Search />
        </div>
    );
};

const Search = () => (
    <div className='search'> 
        <FaSearch size='18' className='search-icon' />
        <input className='search-input' type='text' placeholder='Search...' />
        
    </div>
  );

const BackButton = () => <FaArrowLeft size='24' className='arrow-button' />;
const ForwardButton = () => <FaArrowRight size='24' className='arrow-button' />;

export default SearchBar;