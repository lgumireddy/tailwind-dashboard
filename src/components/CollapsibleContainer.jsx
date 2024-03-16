import ChannelBar from './ChannelBar';
import SideBar from './SideBar';
import React, { useState } from 'react';

const CollapsibleContainer = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='flex'>
            {isOpen 
                ? <ChannelBar />
                : null
            }
            <SideBar isOpen={isOpen} toggleCollapse={toggleCollapse} />
        </div>
    );
    
}

export default CollapsibleContainer;