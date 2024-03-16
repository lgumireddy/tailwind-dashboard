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
          ? <SideBarIcon onClick={props.toggleCollapse} icon={<BsChevronBarLeft size="22" />} />
          : <SideBarIcon onClick={props.toggleCollapse} icon={<BsChevronBarRight size="22" />} />
        }
        
    </div>
  );
};

const SideBarIcon = ({ onClick, icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group" onClick={onClick}>
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
