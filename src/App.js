import React, { useState } from 'react'
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [thing, addThings] = useState([]);

  const handleThings = (e) => {
    e.preventDefault();
    if(todo !== ''){
      localStorage.setItem("todos",JSON.stringify(thing))
      addThings([...thing, todo])
      setTodo('')
    }
    else{
      alert("Please Enter Input")
    }
    
  }

  const remove = (index) => {
    let newThings = thing
    newThings.splice(index,1)
    addThings([...newThings])
  }

  return (
    <div className="main">
    <div className="App">
      <form onSubmit={handleThings}>
        <input type="text" placeholder="Aad New..." name='todo' value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button className='button'>Add</button>
      </form>
      <div className="map">
        <div className="mapp">
        {
          thing.length !== 0 ?
          thing.map((i,key)=>{
            return <div className='item' key={key}>
              <div style={{flex:"1"}}>{i}</div>
              <div style={{textAlign:"end", flex:"1"}}> <button className='remove' onClick={()=>remove(key)}>X</button></div>
            </div>
          })
           :
           <h2>Add Things</h2>
        }
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
