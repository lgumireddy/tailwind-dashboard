import {
    FaHashtag,
} from 'react-icons/fa';
import './index.css';

const TitleBar = () => {
    return (
        <div className='title-bar'>
            <HashtagIcon />
            <Title />
        </div>
    );
};

const HashtagIcon = () => <FaHashtag size='20' className='title-hashtag' />;
const Title = () => <h5 className='title-text'>spog v1.0.0</h5>;

export default TitleBar;