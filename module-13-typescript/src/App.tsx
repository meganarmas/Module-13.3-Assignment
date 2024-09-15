import StartCounter from './Components/Counter';
import ShoppingCart from './Components/ShoppingCart';
import './App.css';

function App() {
  return (
   <div className="App">
    <StartCounter child={0} />
    <ShoppingCart />
   </div>
  );
}

export default App;
