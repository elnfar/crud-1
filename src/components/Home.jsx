import '../index.css'

import React,{useState} from "react"
export default function Home() {
    const [employee,setEmployee] = useState('')
    const [employeeList,setEmployeeList] = useState([])
    const [updatedTodo,setUpdatedTodo] = useState('')
    const [editedTask,setEditedTask] = useState(null)
    const [isEditing,setIsEditing] = useState(0)

    const enterEditedMode = (id) => {
      setIsEditing(id)
    }

    function onChangeHandler(e) {
        setEmployee(e.target.value)
    }

    function onSubmitHandler(e) {
        e.preventDefault()
        addTodo()        
    }

    function addTodo() {
        const task = {
            id: employeeList.length === 0 ? 1 : employeeList[employeeList.length - 1].id + 1,
            taskName: employee
        }

    if(task.taskName === "") return
     setEmployeeList([...employeeList,task])
    }

    function updateTodo(id) {
        setEmployeeList(item => item.map(i => (
            i.id === id ? {...i,taskName:updatedTodo} : i
        )))
    }

    function deleteTodo(id) {
        setEmployeeList(employeeList.filter(employe => employe.id !== id))
    }

    function cancelTodo(id){
        setIsEditing(0)
    }

  return (
    <div>
        <form onSubmit={onSubmitHandler}>   
            <input type="text" value={employee} onChange={onChangeHandler}/>    
            <button type="submit">Add</button>
        </form>
    <div>
        

        {employeeList.map((item) => {
            return (
                <div key={item.id} style={{"display":"flex",gap:'2rem',alignItems:'center'}}>
                    <p>{item.taskName}</p>
                    <p>{item.id}</p>
                    <button onClick={() => deleteTodo(item.id)}>delete</button>
                    <button onClick={() => enterEditedMode(item.id)}>update</button> 

            {isEditing === item.id && (
                <div>
                <input type="text" onChange={(e) => setUpdatedTodo(e.target.value)}/>
                <button onClick={() => updateTodo(item.id)}>update</button> 
                <button onClick={() => cancelTodo(item.id)}>cancel</button>
                </div>
                )}
                </div>


               
            )
        })}

                   
                         
    </div>
    </div>
  )


}
