//import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [para, setpara] = useState()
  const [data, setdata] = useState([])
  const handleClick = ()=>{
    fetch(`https://baconipsum.com/api/?type=all-meat&paras=${para}&start-with-lorem=1`)
    .then(response => response.json())
    .then(json => setdata(json))
  }

  const handleChange = (e)=>(setpara(e.target.value))
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lorem Ipsum Generator</h1>
        <label htmlFor="paragraphs">Paragraphs:</label>
        <input type="number" onChange={handleChange}/>
        <br />
        <button onClick={handleClick}>Generate</button>
        <br />
        {data.map((info)=><div><p>{info}</p><br/></div>)}
      </header>
    </div>
  );
}

export default App;
