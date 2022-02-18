import './App.css';
import Shipping from './components/Shipping';

function App() {
  return (
    <div className="App">
      <h1 className='text-red-500 text-3xl container mx-auto flex item-start mt-10'>Enter your details to proceed forward</h1>
      <Shipping/>
    </div>
  );
}

export default App;
