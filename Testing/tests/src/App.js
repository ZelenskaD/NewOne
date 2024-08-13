
import './App.css';
import Counter from "./Counter";
import FixedComponent from "./FixedComponent";
import Dog from "./Dog";
import Toggler from "./Toggler";

function App() {
  return (
    <div className="App">
      Hello, I am an App!
 <Counter />
        <FixedComponent />
        <Dog />
        <Toggler />
    </div>
  );
}

export default App;
