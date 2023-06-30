const Todo1Saver = ({saveAll}) => {
    return ( 
        <div className="w-full h-[5vh] bg-black text-white flex ">
            <button 
            className="text-3xl "
            onClick={()=>saveAll()}
            
            >SAVE ALL</button>
        </div>

     );
}
 
export default Todo1Saver;