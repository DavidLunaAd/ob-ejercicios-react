import logo from './logo.svg';
import './App.css';
import AComponent from './components/acomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AComponent />
      </header>
    </div>
  );
}

export default App;
