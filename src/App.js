import logo from './logo.svg';
import './App.css';
import AComponent from './components/ejercicios-1-2/acomponent';
import ClockFuncional from './components/ejerecicios-4-6/clockFuncional';
import ContactoList from './components/ejercicios-7-9/contactoList';
import Rectangulo from './components/ejercicios-10-12/rectangulo';
import Formulario from './components/ejercicios-13-15/formulario';
import TaskList from './components/ejercicios-13-15/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        {/* <AComponent /> */}
        
        {/* Ejericios 4 - 5 - 6 */}
        {/* <ClockFuncional /> */}

        {/* Ejercicios 7 - 8 - 9 */}
        {/* <ContactoList></ContactoList> */}

        {/* Ejercicios 10 - 11 - 12 */}
<<<<<<< HEAD
        {/* <Rectangulo></Rectangulo> */}

        {/* Ejercicios 13 - 15 */}
        <TaskList></TaskList>
      </body>
=======
        <Rectangulo></Rectangulo>
      </header>
>>>>>>> da5b7be4e55cc73fa0ee228da22448db854ecde1
    </div>
  );
}

export default App;
