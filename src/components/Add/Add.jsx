import style from './Add.module.css'


function Add(props) {
    return(
        <div className={style.input}>
         <input className={style.inputCase} value={props.text} onChange={props.changeValue}/>
         <button className={style.butt} onClick={props.addTodo}>+</button>
        </div>
    )
}

export default Add