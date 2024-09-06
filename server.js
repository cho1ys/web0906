// 1. express 모듈을 가져옵니다
// 'express'는 Node.js에서 웹 서버를 쉽게 구축할 수 있게 도와주는 프레임워크입니다.
// express를 사용하면 라우팅, 미들웨어, 요청/응답 처리 등의 기능을 쉽게 구현할 수 있습니다.
const express = require('express');

// 2. express 애플리케이션 객체를 생성합니다
// express() 함수는 새로운 express 애플리케이션을 생성합니다.
// 이 객체는 서버의 설정, 요청 처리, 미들웨어 추가 등을 수행합니다.
const app = express();

// 3. 요청 본문(body)을 JSON 형식으로 파싱할 수 있도록 설정합니다
// 클라이언트가 서버에 데이터를 JSON 형식으로 보내면,
// 이 설정을 통해 express가 JSON 데이터를 자동으로 파싱하여 사용할 수 있게 합니다.
app.use(express.json());

// 4. CORS(Cross-Origin Resource Sharing)를 허용하는 미들웨어를 가져옵니다
// CORS는 웹 브라우저가 다른 도메인에서 리소스를 요청할 때 보안상의 이유로 필요한 설정입니다.
// 'cors' 모듈을 사용하면 CORS 정책을 쉽게 설정할 수 있습니다.
const cors = require('cors');

// 5. 모든 도메인에서의 요청을 허용하도록 CORS를 설정합니다
// 이 설정은 서버가 모든 도메인에서 오는 요청을 허용하게 합니다.
app.use(cors());

// 6. 'index' 라는 파일에서 라우터를 가져옵니다
// 라우터는 특정 경로로 들어오는 요청을 처리하는 미들웨어입니다.
// './router/index' 파일에 정의된 라우터를 가져옵니다.
const index = require('./router/index');

// 7. 루트 경로('/')에 대해 'index' 라우터를 사용하도록 설정합니다
// 클라이언트가 루트 경로('/')로 요청을 보내면, 'index' 라우터가 그 요청을 처리합니다.
// 'index' 라우터는 요청을 적절하게 처리하고 응답을 반환합니다.
app.use('/', index);

// 8. 서버를 5000번 포트에서 시작하고, 서버가 정상적으로 작동 중임을 콘솔에 출력합니다
app.listen(5000, () => console.log('server is running on 127.0.0.1:5000'));
