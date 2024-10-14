import './App.css';
import store from './store';

store.subscribe(()=>console.log(store.getState()));

function App() {
  return (
    <div className="App">
    <h1>Increment / Decrement</h1>
    <h4>-by Redux</h4>
    <button>Increment</button>
    <button>Decrement</button>
    </div>
  );
}

export default App;
