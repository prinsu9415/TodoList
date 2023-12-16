import React, { useState } from 'react'
import './TodoList.css'

function TodoList() {

  const [inputItem ,setInputItem] = useState("")

  const [items , setItemsList] = useState([])
const inputItems = (e)=>{
     setInputItem(e.target.value)
}
// handle click
const clickHandle = ()=>{
  setItemsList((oldValue) =>{
    return [...oldValue ,inputItem]
    
  })
  setInputItem("");
}
//delete function
const deletItem = (id)=>{
  console.log("deleted")
  setItemsList((oldValue) =>{
    return oldValue.filter((arrElement,index) =>{
      return index !==id;
    })
  })
}

  return (
    <>
    <div className="container">
      <div className="heading">
        <h2>My ToDo</h2>
      </div>
      <input className='inputBox'
       type='text'
       placeholder='Enter your todo'
       value={inputItem}
       onChange={inputItems} />

       <button className='addBtn' onClick={clickHandle} >Add Todo</button>

       <ol className='itemList'>
        
       {items.map((itemValue,index) =>{
       return <div  key={index} className='myList'>
           <li>{itemValue}
       <i className="ri-close-circle-fill"  onClick={()=>{
              deletItem(index)
            }}></i>
       </li>
            
              
       </div> 
        })}
       </ol>
    </div>
    
    
    </>
  )
}

export default TodoList