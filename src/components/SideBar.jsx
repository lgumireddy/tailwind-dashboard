import { BsPlus, BsFillLightningFill, BsGearFill, BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs';
import { FiInfo } from "react-icons/fi";

const SideBar = (props) => {
  return (
    <div className="sidebar">
                    
        <SideBarIcon icon={<FiInfo size="28" />} />
        <Divider />
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<BsGearFill size="20" />} />
        <Divider />
        {props.isOpen
          ? <SideBarIcon icon={<BsChevronBarLeft size="22" onClick={props.toggleCollapse}/>} />
          : <SideBarIcon icon={<BsChevronBarRight size="22" onClick={props.toggleCollapse}/>} />
        }
        
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
