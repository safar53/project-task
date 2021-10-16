import './App.css';
import NestedComponent from './components/NestedComponent';
import NestedData from './data';

function App() {
  return (
    <div className="container">
      <NestedComponent data={NestedData} />
    </div>
  );
}
export default App;
