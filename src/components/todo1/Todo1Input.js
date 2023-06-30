import { useState } from "react";

const Todo1Input = ({addTodo}) => {

  const [todo, setTodo] = useState({title: ''})

  return (
    <div className="w-full bg-red-600 text-white">
      <div>TODO1 INPUT</div>
      <div>
        <input
          className="m-3 p-3 bg-black"
          type="text"
          name="title"
          value={todo.title}
          onChange={(e) => {
              todo.title = e.target.value
              setTodo({...todo})
            }
          }
        />
        {/* 클릭하면 index쪽으로 전달되어야 함 그래서 함수는 index에서 선언 */}
        <button
          className="bg-black m-3 p-3 border-2 border-white rounded-lg"
          onClick={() => {
            addTodo(todo)
            setTodo({title: ''})
          }}
        >
          ADD TODO
        </button>
      </div>
    </div>
  );
}

export default Todo1Input;