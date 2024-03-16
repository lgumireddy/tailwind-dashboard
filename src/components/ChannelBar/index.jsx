import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';

const services = ['px-booking-editor', 'px-booking-details', 'px-cancellations', 'px-payments', 'px-conversations', 'px-booking-preferences', 'px-ledger', 'payments-view-service', 'aoe-rm', 'rm-quotes', 'payments-view-service', 'px-booking-requests'];
const libraries = ['px-entity-authorization'];
const databases = ['HA_Connect', 'HA_Payments'];
const flows = ['partner-cancellation', 'booking-request', 'inquiry', 'extra-charge', 'partial-refund', 'payment-schedule'];

const ChannelBar = () => {
  return (
    <div className='channel-bar shadow-lg'>
      <ChannelBlock />
      <div className='channel-container'>
        <Dropdown header='Services' selections={services} />
        <Dropdown header='Libraries' selections={libraries} />
        <Dropdown header='Databases' selections={databases} />
        <Dropdown header='Flows' selections={flows} />
      </div>
    </div>
  );
};

const Dropdown = ({ header, selections }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className='dropdown'>
      <div onClick={() => setExpanded(!expanded)} className='dropdown-header'>
        <ChevronIcon expanded={expanded} />
        <h5
          className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}
        >
          {header}
        </h5>
        <FaPlus size='12' className='text-accent text-opacity-80 my-auto ml-auto' />
      </div>
      {expanded &&
        selections &&
        selections.map((selection) => <TopicSelection selection={selection} />)}
    </div>
  );
};

const ChevronIcon = ({ expanded }) => {
  const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
  return expanded ? (
    <FaChevronDown size='14' className={chevClass} />
  ) : (
    <FaChevronRight size='14' className={chevClass} />
  );
};

const TopicSelection = ({ selection }) => (
  <div className='dropdown-selection'>
    <BsHash size='24' className='text-gray-400' />
    <h5 className='dropdown-selection-text'>{selection}</h5>
  </div>
);

const ChannelBlock = () => (
  <div className='channel-block'>
    <h5 className='channel-block-text'>VR-Bookings</h5>
  </div>
);

export default ChannelBar;
