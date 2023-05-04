import './App.scss';
import NavBar from './components/NavBar';
import ShirtInfo from './components/ShirtInfo';
import ShirtImages from './components/ShirtImages';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>        
      </header>
      <div className="shirt-grid">
        <div className="shirt-images" >
            <ShirtImages/>
        </div>
        <div className="shirt-info">
            <ShirtInfo/>
        </div>
      </div>
      <br/> <br/>
    </div>
  );
}

export default App;
