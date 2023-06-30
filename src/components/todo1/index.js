import { useEffect, useState } from "react";
import Todo1List from "./Todo1List";
import Todo1Input from "./Todo1Input";
import Todo1Read from "./Todo1Read";
import uuid from 'react-uuid'
import Todo1Saver from "./TodoSaver";

const Todo1 = () => {
  //라우팅 (웹페이지처럼 페이지 바뀌는거).
  //1번 (파일들 전부 만든 다음).
  console.log("Todo1..........")
  const [todos, setTodos] = useState([])
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    const jsonStr = localStorage.getItem("todos")
    if(jsonStr) {
        setTodos(JSON.parse(jsonStr))
    }
  }, [])

  const saveAll = () => {
    const str = JSON.stringify(todos)
    localStorage.setItem("todos", str)
  }

  const addTodo = (todoObj) => {
    console.log(uuid(), todoObj)
    setTodos([...todos, {tno:uuid(), ...todoObj}])
  }

  const requestView = (tno) => {
    const target = todos.filter( todo => todo.tno === tno )[0]
    console.log("requestView.....", target)
    setCurrent(target)
  }

  const remove = (tno) => {
    setTodos( todos.filter( todo => todo.tno !== tno ) )
    setCurrent(null)
  }

  const modify = (modifiedTodo) => {
    const target = todos.filter( todo => todo.tno === modifiedTodo.tno )[0]
    target.title = modifiedTodo.title
    setTodos([...todos])
    setCurrent(null)
  }

  //2번
  // const getView = () => {

  //   return viewMap[cmd]
  //   if(cmd === "list"){
  //     //6번
  //     return <Todo1List requestView={requestView} todos={todos} changeView={changeView}></Todo1List>
  //   }else if(cmd === "input"){
  //     //7번
  //     return <Todo1Input changeView={changeView} addTodo={addTodo}></Todo1Input>
  //   }else if(cmd === "read"){
  //     return <Todo1Read current={current} changeView={changeView}></Todo1Read>
  //   }
  // }

  return (
    <>
      <div className="text-5xl bg-black text-white">TODO1</div>
      {/* 3번 */}
      <div>
        <Todo1Input addTodo={addTodo}></Todo1Input>
        <Todo1List requestView={requestView} todos={todos}></Todo1List>
        <Todo1Read current={current} remove={remove} modify={modify}></Todo1Read>
        <Todo1Saver saveAll={saveAll}></Todo1Saver>
      </div>
    </>
  );
}

export default Todo1;