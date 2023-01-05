import logo from './logo.svg';
import './App.css';
import AComponent from './components/ejercicios-1-2/acomponent';
import Clock from './components/ejerecicios-4-6/clock';
import ClockFuncional from './components/ejerecicios-4-6/clockFuncional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <AComponent /> */}
        {/* Ejericios 4 - 5 - 6 */}
        <ClockFuncional />
      </header>
    </div>
  );
}

export default App;
