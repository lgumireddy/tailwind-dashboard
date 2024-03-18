import { Fragment, useState } from 'react'

import { Menu, Transition } from '@headlessui/react'
import { BsGearFill } from 'react-icons/bs';
import useDarkMode from '../../../hooks/useDarkMode';
import {
    FaRegBell,
    FaUserCircle,
    FaMoon,
    FaSun,
} from 'react-icons/fa';
import { RxQuestionMarkCircled } from "react-icons/rx";
import { TbDotsVertical } from "react-icons/tb";
import { PiSignOutFill } from "react-icons/pi";

import './index.css';

const UserSettingsBar = () => {
    return (
        <div class='user-settings-container'>
            <MyDropdown />
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
          <FaSun size='24' className='user-settings-dropdown-icon' />
        ) : (
          <FaMoon size='24' className='user-settings-dropdown-icon' />
        )}
      </span>
    );
  }
  
  const KebabMenuIcon = () => <TbDotsVertical size='24' className='user-settings-icon'/>
  const BellIcon = () => <FaRegBell size='24' className='user-settings-icon'/>
  const UserCircle = () => <FaUserCircle size='24' className='user-settings-icon'/>
  const HelpIcon = () => <RxQuestionMarkCircled size='24' className='user-settings-dropdown-icon'/>
  const GearIcon = () => <BsGearFill size='24' className='user-settings-dropdown-icon'/>
  const SignOutIcon = () => <PiSignOutFill size='24' className='user-settings-dropdown-icon'/>

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const Dropdown = () => {
    return (
        <Menu>
          
            <Menu.Button>
                <KebabMenuIcon />
            </Menu.Button>
          
    
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 top-10 z-10 mt-2 w-10">
              <div className="py-1 m-auto">
                <Menu.Item>
                {({ active }) => (
              <a
                href='#'
                className={`${
                  active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                }`}
              >
                <ThemeIcon/>
              </a>
            )}
   
                </Menu.Item>
                <Menu.Item>
                  
                    <a
                      href="#"
                      className={classNames(
                        'block py-2'
                      )}
                    >
                        <HelpIcon/>
                    </a>
                
                </Menu.Item>
                <Menu.Item>
                <a
                      href="#"
                      className={classNames(
                        'block py-2'
                      )}
                    >
                    <GearIcon/>
                  </a>
                </Menu.Item>
                <Menu.Item>
                <a
                      href="#"
                      className={classNames(
                        'block py-2'
                      )}
                    >
                    <SignOutIcon/>
                  </a>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )
}

function MyDropdown() {

    const [display, setDisplay] = useState('display here');
    const [customOpen, setCustomOpen] = useState(false);
  
  
    function buttonClicked() {
      setCustomOpen(prev => !prev);
    }
  
    return (
      <Menu>
            <Menu.Button onClick={buttonClicked}>
                <KebabMenuIcon />
            </Menu.Button>
            {customOpen && (
            <Menu.Items static className="absolute right-0 top-10 z-10 mt-2 w-10">
              <div className="py-1 m-auto">
                <Menu.Item className={'block py-2'}>
                    <div>
                        <ThemeIcon/>
                    </div> 
                </Menu.Item>
                <Menu.Item className={'block py-2'}>
                  
                    <a href="#">
                        <HelpIcon/>
                    </a>
                
                </Menu.Item>
                <Menu.Item className={'block py-2'}>
                    <a href="#">
                        <GearIcon/>
                    </a>
                </Menu.Item>
                <Menu.Item className={'block py-2'}>
                    <a href="#">
                        <SignOutIcon/>
                    </a>
                </Menu.Item>
              </div>
            </Menu.Items>
            )}
      </Menu>
    )
  }

export default UserSettingsBar;