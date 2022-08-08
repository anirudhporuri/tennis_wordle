import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then(res =>res.json())
      .then(json => {
        //Generate random int between 0 - 30
        const randomInt = json[Math.floor(Math.random() * json.length)]
        setSolution(randomInt.last)
      })
  }, [setSolution])

  return (
    <div className="App">
        <h1>Tennis Wordle</h1>
        {solution && <div>Solution is: {solution} </div>}
    </div>
  );
}

export default App;
