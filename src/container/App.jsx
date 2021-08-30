import '../styles/App.css';
import FunctionComponent from '../components/FunctionComponent/FunctionComponent';
import ClassComponent from '../components/ClassComponent/ClassComponent';

const invitados = [
  {nombre: "Nicolas", estaEnLista : true, tarea: "papas fritas"},
  {nombre: "Ivan", estaEnLista : false, tarea: "pizzas"},
  {nombre: "Carolina", estaEnLista : true, tarea: "bebidas"}
]

function App() {
  return (
    <div className="App">
      <h3>Invitados:</h3>
        {/* forma dinámica */}
        <ul>
          {invitados.map((invitado, index) => <ClassComponent y="invitado" nombre={invitado.nombre} estaEnLista={invitado.estaEnLista} key={index}/> )}
        </ul>  
      {/* forma estática    
      <ClassComponent nombre="Nicolas" estaEnLista={true} />
      <ClassComponent nombre="Ivan" estaEnLista={false} />
      <ClassComponent nombre="Carolina" estaEnLista={true} />
      */}
      <h3>Tareas: </h3>
        {/* forma dinámica */}
        <ul>
          {invitados.map((invitado, index) => <FunctionComponent x="tareas" nombre={invitado.nombre} tarea={invitado.tarea} key={index}/>)}
        </ul>
     {/* forma estática 
      <FunctionComponent nombre="Nicolas" tarea="papas fritas" />
      <FunctionComponent nombre="Ivan" tarea="pizzas" />
      <FunctionComponent nombre="Carolina" tarea="bebidas" />
    */}
    </div>

   /*  <div className="App">
      
    </div> */
  );
}

export default App;
