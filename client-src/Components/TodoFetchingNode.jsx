import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
// import { addItem } from './UseMutation';
// 할 일 목록(Todo list)을 가져오는 함수입니다
function fetchTodo(){
    // 'http://localhost:5000/api/todo' 주소로 GET 요청을 보냅니다
    return fetch('http://localhost:5000/api/todo')
    // 응답(response)을 JSON으로 변환합니다
    .then((res) => res.json())
}
async function updateTodoStatus(todo){
    const res = await axios.put(
        `http://localhost:5000/api/todo/${todo.id}`,
        {status : !todo.status}
    )
    return res.data
}
async function deleteTodoList(todo){
    const res = await axios.delete(
        `http://localhost:5000/api/todo/${todo.id}`
    )
    return res.data
}

const TodoFetchingNode = () => {
    const queryClient = useQueryClient()
    const {data = [],error,isLoading} = useQuery({
        queryKey : ['todos'],
        queryFn:fetchTodo
    })
    if(error){}
    if(isLoading){}
    const updateTodoMutation = useMutation({
        mutationFn : updateTodoStatus,
        onSuccess : (result)=>{
            queryClient.invalidateQueries({queryKey : ['todos']})
        },
        onError : (e) =>{
            console.error('Error',e)
        }
    })
    const deleteTodoMutation = useMutation({
        mutationFn : deleteTodoList,
        onSuccess : (result)=>{
            queryClient.invalidateQueries({queryKey : ['todos']})
        },
        onError : (e) =>{
            console.error('Error',e)
        }
    })
    function changeHandler(todo){
        updateTodoMutation.mutate(todo)
    }
    function deleteList(todo){
        deleteTodoMutation.mutate(todo)
    }
    return (
        <div>
            <h3>할 일 리스트</h3>
            {
            data.map((l)=>(
                <p key={l.id}>
                    <input type='checkbox' checked = {l.status}onChange={()=>{
                        changeHandler(l)
                    }}/>
                    {l.text}
                    <button onClick={()=>{deleteList(l)}}>삭제</button>
                </p>
            ))
            }
        </div>
    );
};

export default TodoFetchingNode;
