import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/Header"
import Todo from './components/Todo';

const App = () => {

  const [todolist,setTodolist] = useState([]);
  const [completedData, setCompletedData] = useState([]);
  const ArrayTodoList = [];

  useEffect(() =>{
    const handleTodolist = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await response.json();
      const resultTodoList = result.slice(0,20);
      setTodolist(resultTodoList);
    }

    handleTodolist();

  },[]);

  const handleCompleteTodo = (id) =>{
    setTodolist(todolist.map(todo => todo.id == id ? {...todo, completed: !todo.completed} : todo))
  }
  console.log(todolist.id);

  const handleCompletedBtn = (mode) => {

    switch (mode) {
      case 'completed':
        todolist.forEach(element => {
          if(element.completed == true){
            ArrayTodoList.push(element);
          }
          setCompletedData(ArrayTodoList);
        })
        break;
        case 'Uncompleted':
          todolist.forEach(element => {
            if(element.completed == false){
              ArrayTodoList.push(element);
            }
            setCompletedData(ArrayTodoList);
          })
          break;
        case 'All':
          setCompletedData(todolist)
          break;
        default:
            setCompletedData(todolist)
          break;
    }
  }

    useEffect( () =>{
      handleCompletedBtn()
    },[todolist])


  //   if (mode == "completed"){
  //     todolist.forEach(element => {
  //       if(element.completed == true){
  //         ArrayTodoList.push(element)
  //     }
  //     console.log(ArrayTodoList);
  //     setTodolist(ArrayTodoList)
  //     });
  //  } else if (mode === "Uncompleted"){
  //   todolist.forEach(element => {
  //     if(element.completed == false){
  //       ArrayTodoList.push(element)
  //     }
  //   console.log(ArrayTodoList);
  //   setTodolist(ArrayTodoList)
  //   });
  //  }
  


  return (
    <div className="App">
      <Header handleCompletedBtn={handleCompletedBtn} />
      <div className="container">
        {
          completedData?.map( singleTodo => (
            <Todo id={singleTodo.id} key={singleTodo.id} title={singleTodo.title} status={singleTodo.completed} handleCompleteTodo={handleCompleteTodo}/>
          ))
        }
      </div>
    </div>
  )
}

export default App;
