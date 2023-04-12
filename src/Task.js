import './App.css'

export const Task = (props) => {
    return (
      <div className="task" style={{backgroundColor: props.completed ? "green": "transparent"}}>
         {console.log(props.completed)}
         <h1 >{props.taskName}</h1>
         <button onClick={() => props.deleteTask(props.id)}> X </button>
         <button onClick={()=>props.completeTask(props.id)}> complete </button>
      </div>
    );
 };