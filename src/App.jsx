import Channelbar from './components/ChannelBar';
import ContentContainer from './components/ContentContainer';
import SideBar from './components/SideBar';
import TopNavigation from './components/TopNavigation';

function App() {
  return (
    <div>
      <TopNavigation />
      <div className='flex'>
        <Channelbar />
        <SideBar />
      </div>
      
      {/* <ContentContainer /> */}
    </div>
  );
}

export default App;
