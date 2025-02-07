import './InpBox.css'

function InpBox(props) {
    return(
        <div className='sec'>
      {
        props.todos.map((todo) => {
          return(
            <li className='li' key={todo.id}>
              <input className='checked' type="checkbox" checked={todo.isDone} onChange={() => props.change(todo.id)}/>
              <span className='title'>{todo.title}</span>
              <button className='but' onClick={() => props.remove(todo.id)}>X</button>
            </li>
          )
        })
      }
    </div>
    )
} 

export default InpBox