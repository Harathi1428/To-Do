
import './App.css';
import {useState} from "react";

function App() {
  const [item,setItem]=useState("");
  const [items,setItems]=useState([]);
  function add(event){
    setItem(event.target.value);
  }
  const additem=()=>{
    setItems((prev)=>{
      return [...prev,item];
    })
    setItem("");
  }
  const deleteitem=(index)=>{
    setItems((prev)=>{
const newitems=[...prev];
newitems.splice(index,1);
return newitems;
    });
  }
 
  return (
    <section className='main'>
    <div className="outer">
    <div className='heading'><h1><b>to-do</b></h1></div>
    <div className='text-box'>
    <input type="text" placeholder='add an item' onChange={add} value={item}/>
    <button  className="btn" type="submit" onClick={additem}>add</button>
    </div>
    <div className='item'><ul>
      {items.map((it,index)=><li key={index}>
        <h3>{it}</h3>
          <button className='del' onClick={() => deleteitem(index)}>delete</button>
        </li>)}</ul></div></div>
        </section>
  )}
export default App;
