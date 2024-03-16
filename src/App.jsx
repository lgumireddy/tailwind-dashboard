import ContentContainer from './components/ContentContainer';
import CollapsibleContainer from './components/CollapsibleContainer';
import TopNavigation from './components/TopNavigation';

function App() {
  return (
    <div>
      <TopNavigation />
      <div className='flex'>
        <CollapsibleContainer />
      </div>
      
      {/* <ContentContainer /> */}
    </div>
  );
}

export default App;
