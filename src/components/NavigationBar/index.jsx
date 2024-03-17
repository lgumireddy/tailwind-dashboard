import SearchBar from './SearchBar';
import UserSettingsBar from './UserSettingsBar';
import TitleBar from './TitleBar';
import './index.css';

const NavigationBar = () => {
  return (
    <div className='navigation-bar'>
      <TitleBar />
      <SearchBar />
      <UserSettingsBar />      
    </div>
  );
};

export default NavigationBar;