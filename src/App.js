import logo from './logo.svg';
import './App.css';
import AComponent from './components/ejercicios-1-2/acomponent';
import ClockFuncional from './components/ejerecicios-4-6/clockFuncional';
import ContactoList from './components/ejercicios-7-9/contactoList';
import Rectangulo from './components/ejercicios-10-12/rectangulo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <AComponent /> */}
        
        {/* Ejericios 4 - 5 - 6 */}
        {/* <ClockFuncional /> */}

        {/* Ejercicios 7 - 8 - 9 */}
        <ContactoList></ContactoList>

        {/* Ejercicios 10 - 11 - 12 */}
        <Rectangulo></Rectangulo>
      </header>
    </div>
  );
}

export default App;
