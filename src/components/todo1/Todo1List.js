const Todo1List = ({requestView, todos}) => {
    return (
      <div className="w-full bg-black text-white">
        <div>TODO1 LIST</div>
        {/* 4번 */}
  
        <ul>
          {todos.map( t =>
            <li 
              key={t.tno}
              onClick={() => requestView(t.tno)}
            >
              {t.tno} - {t.title}
            </li>
          )}
        </ul>
      </div>
    );
  }
  
  export default Todo1List;