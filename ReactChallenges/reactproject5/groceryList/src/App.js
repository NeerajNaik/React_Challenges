import './App.css';
import { useState } from 'react';
function App() {
  const [btnType, setbtnType] = useState("Submit")
  const [item, setitem] = useState("")
  const [list, setlist] = useState([])
  const [editVal, seteditVal] = useState("")
  const handleClick = (e) => {
    if (e.target.value === "Submit") {
      setlist([...list,item])
    }
    else {
      let x = list.filter(listItem=>listItem!==editVal)
      console.log(x)
      x.push(item)
      setlist(x)
      setbtnType("Submit")
      seteditVal("")
    }
    setitem("")
  }
  const handleChange = (e) => (setitem(e.target.value))
  const handleInnerEdit = (e)=>{
    let editValue = e.target.parentElement.firstChild.innerText
    setbtnType("Edit")
    setitem(editValue)
    seteditVal(editValue)

  }
  const handleInnerDelete= (e)=>{
    let deleteDiv = e.target.parentElement
    let deleteValue = e.target.parentElement.firstChild.innerText
    let x = list.filter(listItem=>listItem!==deleteValue)
    setlist(x)
    console.log(deleteDiv)
    //deleteDiv.remove()
  }

  return (
    <div className="App">
      <h1>Grocery List</h1>
      <input type="text" value={item} onChange={handleChange} />
      <input type="button" value={btnType} onClick={handleClick} />
      {list.map((listItem) => {
        return  <div className='innerDiv'>
                  <p>{listItem}</p>
                  <button style={{alignSelf:"center"}} onClick={handleInnerEdit}>edit</button>
                  <button style={{alignSelf:"center"}} onClick={handleInnerDelete}>delete</button>
                </div>
      })}
    </div>
  );
}

export default App;
