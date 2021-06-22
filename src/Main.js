import React from "react"
import {useState,useContext} from "react"
import data from './data'
import "./App.css"
import {shopContext} from './App'

const MainContent=()=>{
    return(
    <section className="container">
        { data.map( item => <Item key={item.id} {...item}/> ) };
    </section>
  );
}

function Item(props){

  const ExtendedButton = ()=>{
    return(
    <div>
      <button className=" add-btn extended-btn down" onClick={()=>clicker('down')}>-</button>
      {count}
      <button className="add-btn extended-btn up" onClick={()=>clicker('up')}>+</button>
    </div>
    );
  }

  const clicker = (type) =>{
    if(count<10 && type==='up') {setCount(prevCount=>prevCount+1);SetCartCount(c=>c+1)}
    if(count>0 && type==='down') { setCount(prevCount=>prevCount-1);SetCartCount(c=>c-1)}
  }

  const {SetCartCount} = useContext(shopContext)
  const [count,setCount] = useState(0)

  return (
    <div className="element">
      <div><img src={props.img}alt="article-img"/></div>
      <div className='description'>
        <span className='title'>{props.title}</span>
        <span className='price'>{props.price}</span>
      </div>
      {count===0? <button className="add-btn" type='button' onClick={()=>clicker('up')}>ADD</button> : <ExtendedButton></ExtendedButton>}
    </div>
  );
}

export default MainContent