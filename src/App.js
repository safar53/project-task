import './App.css';
// import NestedData from './data';
import List from './components/DataTree';
import { useEffect, useState } from 'react';
import { generateData } from './api/generateData';

function App() {
  const [mock, setMock] = useState([])
  useEffect(() => {
    generateData(12,3)
      .then((data) => {
        setMock(data)
      })
      .catch(err => console.log(err, "error"))
  }, []);

  return (
    <div className="container">
      <ul>
        {mock.map((item) => {
          return <List key={item.name} name={item.name} children={item.children} />
        })}
      </ul>
    </div>
  );
}
export default App;
