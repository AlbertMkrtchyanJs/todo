import './Add.css'


function Add(props) {
    return(
        <div className='input'>
         <input className='inputCase' value={props.text} onChange={props.changeValue}/>
         <button className='butt' onClick={props.addTodo}>+</button>
        </div>
    )
}

export default Add