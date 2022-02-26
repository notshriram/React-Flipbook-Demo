import logo from './logo.svg';
import './App.css';
import VerticallyCentredModal from './components/VerticallyCentredModal';



function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <VerticallyCentredModal/>
      </header>
    </div>
  );
}

export default App;
