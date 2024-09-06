// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import { PacmanLoader } from 'react-spinners';
// function fetchTodo(){
//     return fetch("https://jsonplaceholder.typicode.com/users")
//     .then(
//         (response) => response.json()
//     )
// }
// const TodoFetching = () => {
//     const {data, error, isLoading} = useQuery({
//         queryKey:['todos'],
//         queryFn : fetchTodo
//     })
//     if(isLoading) return <PacmanLoader color = '#ff00c8' size= {30}/>
//     // <div className='spinner-con'><div className='spinner'></div></div>
//     if(error) return <div>error : {error.message}</div>
//     return (
//         <div>
//             <h1>사용자 정보</h1>
//             {
//                 data.map((i)=>(
//                     <div key={i.id}>
//                     <p> Name :i{i.name}</p>    
//                     <p> Email :i{i.email}</p>    
//                     <p> Phone :i{i.phone}</p>    
//                     <hr/>
//                     </div>   
//                 ))
//             }
//         </div>
//     );
// };

// export default TodoFetching;