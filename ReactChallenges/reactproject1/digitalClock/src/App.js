import './App.css';
import {useEffect, useState} from 'react'
function App() {
  const [clock, setclock] = useState()
  useEffect(() => {
    setInterval(() => {
      let date = new Date()
      setclock(date.toLocaleTimeString())
    }, 1000);
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <div>{clock}</div>
      </header>
    </div>
  );
}

export default App;
