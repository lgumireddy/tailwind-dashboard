import { BsPlus, BsFillLightningFill, BsGearFill, BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs';
import { FiInfo } from "react-icons/fi";

const SideBar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
                    
          <SideBarIcon icon={<FiInfo size="28" />} />
          <SideBarIcon icon={<BsPlus size="32" />} />
          <SideBarIcon icon={<BsFillLightningFill size="20" />} />
          <SideBarIcon icon={<BsGearFill size="20" />} />
          
      </div>
  
      <div className="sidebar-bottom">
        {props.isOpen
          ? <SideBarIcon onClick={props.toggleCollapse} icon={<BsChevronBarLeft size="22" />} />
          : <SideBarIcon onClick={props.toggleCollapse} icon={<BsChevronBarRight size="22" />} />
        }
        <Divider />
      </div>

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
