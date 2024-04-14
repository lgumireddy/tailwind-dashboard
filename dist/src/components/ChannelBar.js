"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const fa_1 = require("react-icons/fa");
const orgHierarchy = [
    'Tech',
    'ParTech',
    'Supply Partner Experience',
    'Run The Business',
    'Bookings, Calendar, & Rates',
];
const services = [
    'px-booking-editor',
    'px-booking-details',
    'px-cancellations',
    'px-payments',
    'px-conversations',
    'px-booking-preferences',
    'px-ledger',
    'payments-view-service',
    'aoe-rm',
    'rm-quotes',
    'payments-view-service',
    'px-booking-requests',
    'px-conversation-actions',
    'reservation-manager-ui'
];
const libraries = ['px-entity-authorization'];
const databases = ['HA_Connect', 'HA_Payments'];
const flows = ['partner-cancellation', 'booking-request', 'inquiry', 'extra-charge', 'partial-refund', 'payment-schedule'];
const ChannelBar = () => {
    return (React.createElement("div", { className: 'channel-bar shadow-lg' },
        React.createElement(ChannelBlock, null),
        React.createElement("div", { className: 'channel-container' },
            React.createElement(Dropdown, { header: 'Services', selections: services }),
            React.createElement(Dropdown, { header: 'Libraries', selections: libraries }),
            React.createElement(Dropdown, { header: 'Databases', selections: databases }),
            React.createElement(Dropdown, { header: 'Flows', selections: flows }))));
};
const Dropdown = ({ header, selections }) => {
    const [expanded, setExpanded] = (0, react_1.useState)(true);
    return (React.createElement("div", { className: 'dropdown' },
        React.createElement("div", { onClick: () => setExpanded(!expanded), className: 'dropdown-header' },
            React.createElement(ChevronIcon, { expanded: expanded }),
            React.createElement("h5", { className: expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text' }, header),
            React.createElement("div", { size: '12', className: 'text-accent text-opacity-80 my-auto ml-auto' })),
        expanded &&
            selections &&
            selections.map((selection) => React.createElement(TopicSelection, { selection: selection }))));
};
const ChevronIcon = ({ expanded }) => {
    const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
    return expanded ? (React.createElement(fa_1.FaChevronDown, { size: '14', className: chevClass })) : (React.createElement(fa_1.FaChevronRight, { size: '14', className: chevClass }));
};
const TopicSelection = ({ selection }) => (React.createElement("div", { className: 'dropdown-selection' },
    React.createElement("h5", { className: 'dropdown-selection-text' }, selection)));
const ChannelBlock = () => (React.createElement("div", null,
    React.createElement("div", { className: 'channel-block' },
        React.createElement("h5", { className: 'channel-block-text' }, "Expedia Group")),
    React.createElement(Dropdown, { header: 'Org Hierarchy', selections: orgHierarchy }),
    React.createElement("div", { className: 'channel-block' },
        React.createElement("h5", { className: 'channel-block-text' }, "VR-Bookings"))));
exports.default = ChannelBar;
