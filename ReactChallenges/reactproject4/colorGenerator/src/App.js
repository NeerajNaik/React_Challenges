//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const [color, setcolor] = useState("")
  const [colorList, setcolorList] = useState([])
  const handleClick=()=>{
    setcolorList([...colorList,color])
  }
  const handleChange = (e)=>(setcolor(e.target.value))
  return (
    <div>
    <div className="App">
      <h1>Color Generator</h1>
      <input type="text" onChange={handleChange}/>
      <button onClick={handleClick}>Generate</button>
      </div>
      <br />
      <div className='outerDiv'>
      {colorList.map(color =>{
        return  <div style={{backgroundColor:color}} className='innerDiv'>
                  <h4 style={{overflowWrap:'break-word'}}>{color}</h4>
                </div>
      })}
      </div>
    </div>
  );
}

export default App;
