import logo from './logo.svg';
import './App.css';
import Flipbook from './components/Flipbook';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Flipbook/>
      </header>
    </div>
  );
}

export default App;
