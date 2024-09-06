// Express 모듈을 가져옵니다. Express는 Node.js에서 간단하게 서버를 구축할 수 있도록 도와주는 웹 프레임워크입니다.
const express = require('express');
const { v4: uuidv4 } = require('uuid')
// Express의 Router를 사용합니다. Router는 라우팅을 처리하는 객체로, 각 요청에 대해 적절한 응답을 보내는 역할을 합니다.
// 'router()'가 아니라 'Router()'로 대문자로 시작해야 합니다.
const router = express.Router();  

// HTTP GET 요청에 응답하는 경로를 설정합니다.
// 클라이언트가 서버의 '/' (홈페이지 같은 최상위 경로)에 GET 요청을 보낼 때 실행되는 함수입니다.
router.get('/', (req, res) => {
    // 요청(req)이 들어오면 응답(res)으로 "hello node.js"라는 문자열을 클라이언트에게 보냅니다.
    res.send('hello node.js');
});

// router 객체를 외부에서 사용할 수 있도록 내보냅니다.
// 이 코드를 다른 파일에서 require()로 가져와서 사용할 수 있습니다.
module.exports = router;

let todoList = [
    {id : uuidv4(), text:'리액트 기초 공부하기', status : false},
    {id : uuidv4(), text:'취업 준비하기', status : false},
    {id : uuidv4(), text:'여행가기', status : true}
]
router.get('/api/todo',(req,res)=>{
    res.json(todoList)
})

router.post('/api/add', (req,res)=>{
    
    console.log(todoList.length)
    console.log(req.body.text)
    const newItem = {
        id : uuidv4(),
        text : req.body.text,
        status : false
    }
    todoList.push(newItem)
    res.send(newItem)
})
router.put('/api/todo/:id',(req,res)=>{
    const id = req.params.id
    const {status} = req.body

    const todoIndex = todoList.findIndex((todo) => todo.id === id)
    if(todoIndex === -1){
        return res.status(404)
    }
    todoList[todoIndex].status = status
    res.send(todoList[todoIndex])
})
router.delete('/api/todo/:id',(req,res)=>{
    const id = req.params.id
    const todoIndex = todoList.findIndex((todo) => todo.id === id)
    if(todoIndex === -1){
        return res.status(404)
    }
    todoList.splice(todoIndex, 1)
    res.json(todoList)

})