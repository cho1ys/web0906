import React from 'react';
import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query';

export async function addItem(newItem){
    const res = await axios.post('http://localhost:5000/api/add',newItem)
    return res.data
}


const UseMutation = () => {
    const queryClient = useQueryClient()
    const addItemMutation = useMutation({
        mutationFn : addItem,
        onSuccess:(result)=>{
            queryClient.invalidateQueries({queryKey:['todos']})
        },
        onError:(error) =>{
            console.error('Error',error)
        }
    })

    function sendData(){
        const input = prompt('새로운 할 일 입력하세요')
        if(input){
            addItemMutation.mutate({text : input})
        }
    }
    
    return (
        <div>
            <button onClick={sendData}>추가하기</button>
        </div>
    );
};

export default UseMutation