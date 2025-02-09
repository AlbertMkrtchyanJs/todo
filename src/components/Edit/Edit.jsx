

function Edit(props){
    return(
        <>
        <input type="text" value={props.todo.title} className="dbClick"/>
        </>
    )
}

export default Edit