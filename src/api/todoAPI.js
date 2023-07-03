import axios from "axios"

//const server = "http://localhost:8080/api/todos/"

export const getList = async() => {

    //promise 약속어음. async가 붙어있으면 무조건 promise.
    const res = await axios.get(`http://localhost:8080/api/todos/list`)

    return res.data

}

export const postTodo = async (todo) => {
    const res = await axios.post('http://localhost:8080/api/todos/', todo)

    return res.data
}