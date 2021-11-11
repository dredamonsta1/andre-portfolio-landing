import img from '../src/image/nyc.JPG';
import LandingPageCircle from './components/LandingPageCircle/LandingPageCircle';
import LandingPageContainer from './components/LandigPageContainer/LandingPageContainer';
import './App.css';

function App() {
  return (
    <div 
      className="app-background"
      style={{
      backgroundImage: `url(${img})`,
      backgroundRepeat: "no-repeat",
      width: '100%',
      height: '100%'
      }}>
      <div className="filter-shade">
        <div className="small-container">
        <h1> Hello world</h1>
          <LandingPageCircle />
          <LandingPageContainer />
      
        
        
        
        
        </div>
      </div>
    </div>
  );
}

export default App;
