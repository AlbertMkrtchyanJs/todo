import style from './InpBox.module.css'
import { useState } from 'react'

function InpBox(props) {

const[dbCl,setDbCl] = useState(false)
const[title,setTitle] = useState(props.todos.title)

const inputEdit = () =>{
  setDbCl(true)
}

const blurEffect = () =>{
  if(title.trim() === ''){
    return <p style={{color: 'red'}}>Edit!!</p>
  }else{
    setDbCl(false)
    if (title.trim()) {
      return title
    }
  }
}

    return(
        <div className={style.sec}>
      {
        props.todos.map((todo) => {
          return(
            <li className={style.li} key={todo.id}>
              <input className={style.checked} type="checkbox" checked={todo.isDone} onChange={() => props.change(todo.id)}/>
              {dbCl ? <input 
                      type='text' 
                      onChange={(e) => setTitle(e.target.value)} 
                      onBlur={blurEffect} 
                      value={title}
                      /> : <span
                       className={style.li} 
                       onDoubleClick={inputEdit}>
                        {title}
                        </span>}
              <button className={style.but} onClick={() => props.remove(todo.id)}>X</button>
            </li>
          )
        })
      }
    </div>
    )
} 

export default InpBox