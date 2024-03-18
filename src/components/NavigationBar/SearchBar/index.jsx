import {
    FaSearch,
    FaArrowLeft,
    FaArrowRight,
} from 'react-icons/fa';
import { LuClock3 } from "react-icons/lu";
import './index.css';

const SearchBar = () => {
    return (
        <div className='search-bar'>
          <BackButton />
          <ForwardButton />
          <HistoryButton />
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

const BackButton = () => <FaArrowLeft size='24' className='search-bar-icon' />;
const ForwardButton = () => <FaArrowRight size='24' className='search-bar-icon' />;
const HistoryButton = () => <LuClock3 size='30' className='search-bar-icon' />

export default SearchBar;

/*
Need to add
1. clear button
2. a way view favorites
*/