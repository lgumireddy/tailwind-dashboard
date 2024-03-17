import useDarkMode from '../../../hooks/useDarkMode';
import {
    FaRegBell,
    FaUserCircle,
    FaMoon,
    FaSun,
  } from 'react-icons/fa';

  import { TbDotsVertical } from "react-icons/tb";
  import './index.css';

const UserSettingsBar = () => {
    return (
        <div class='user-settings-container'>
            <KebabMenuIcon />
            {/* <ThemeIcon /> */}
            <UserCircle />
            <BellIcon />
            
        </div>
    );
};

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size='24' className='user-settings-icon' />
        ) : (
          <FaMoon size='24' className='user-settings-icon' />
        )}
      </span>
    );
  };
  
  const KebabMenuIcon = () => <TbDotsVertical size='24' className='user-settings-icon' />
  const BellIcon = () => <FaRegBell size='24' className='user-settings-icon' />;
  const UserCircle = () => <FaUserCircle size='24' className='user-settings-icon' />;

export default UserSettingsBar;