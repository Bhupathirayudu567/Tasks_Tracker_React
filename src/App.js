import {useState,useEffect} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'


const App= () => {
  const[showAddTask,setShowAddTask]=useState(false) //if in usestate if we give false by default the add task form will not open,if it is true the the add task form will open defaultly
const[tasks,setTasks]=useState([])

useEffect(() => {
  const getTasks=async() =>{
    const tasksFromServer=await fetchTasks()
    setTasks(tasksFromServer)
  }

 
 getTasks()
},[])  //if you want to pass any dependencies pass through this.

//Fetch Tasks
const fetchTasks=async () => {
  const res=await fetch('http://localhost:5000/tasks')
  const data=await res.json()
  console.log(data)
  return data
}
//Fetch Task
const fetchTask=async (id) => {
  const res=await fetch(`http://localhost:5000/tasks/${id}`)
  const data=await res.json()
  console.log(data)
  return data
}



//Add Task
const addTask=async (task)=>{
  const res=await fetch('http://localhost:5000/tasks',{
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(task)
  })
  const data= await res.json()
  setTasks([...tasks,data])
  // const id =Math.floor(Math.random() *10000)+1 //to generate a random id for the task
  // const newTask={id, ...task}   //...task means copying the task
  // setTasks([...tasks,newTask])  //here we are copying entire tasks and adding a new task to them 
}
//Delete Task
const deleteTask=async (id)=> {
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'DELETE', //used to delete
  })
   setTasks(tasks.filter((task)=> task.id!==id))

}
//Toggle Remainder
const toggleRemainder=async(id)=>{
  const taskToToggle=await fetchTask(id)
  const updTask={ ...taskToToggle,reminder:!taskToToggle.reminder}
  const res=await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'PUT',
    headers:{
      'Content-type':'application/json',
    },
    body:JSON.stringify(updTask),
  })

  const data=await res.json()
  
  setTasks(tasks.map((task)=>
  task.id===id ? {...task,reminder:
    data.reminder}:task))
}
  return (
    <div className="container"> 
      <Header onAdd={() =>setShowAddTask(!showAddTask)} showAdd={showAddTask}/> 
      {showAddTask && <AddTask onAdd={addTask}/>} 
      { tasks.length>0 ?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/>):('No Task to Show')}
      <Footer/>
      
    </div>
    
    
  )
}

export default App;
