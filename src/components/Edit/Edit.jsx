import { useState } from "react"


function Edit(props){
    const [isEdited,setIsEdited] = useState(false)
    const [text,setText] = useState('')

    const doubleClick = () => {
        setIsEdited(true)
    };

    const change = (e) => {
        setText(e.target.value)
    };

    return(
    <div>
    {
    isEdited ? <input
             type="text"
             value={text}
             onChange={change}
             
             /> : <p
                 onDoubleClick={doubleClick}>
                    {props.todo.title}
                    </p>
        }
    </div>   
    )
}

export default Edit