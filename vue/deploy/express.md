# Express

> Express로 Vue 프로젝트 배포하기

### 1. Express 설치

```bash
npm install express-generator -g
express deploy

cd deploy
npm install   
npm start
```

http://localhost:3000 접속

![image](https://user-images.githubusercontent.com/25674959/56713248-439cf700-676c-11e9-90d6-44785dc9f90b.png)

&nbsp;

### 2. 배포파일 이동

Vue 빌드파일들을 Express로 이동

![image](https://user-images.githubusercontent.com/25674959/56714376-962be280-676f-11e9-89da-51148e1cf92b.png)

&nbsp;

### 3. index 설정 변경

Express 접속시, 배포파일의 index.html을 띄워줘야 한다.

**Express 프로젝트/route/index.js**
```javascript
var express = require('express');
var router = express.Router();
var path = require('path'); // new

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public', 'index.html')) // new
});

module.exports = router;
```

&nbsp;

내가 참고한 블로그에는 라우팅을 위해 별도의 모듈(connect-history-api-fallback)이 필요하다고 하는데, 없어도 잘 됬음.

&nbsp;
&nbsp;

### 참고

- [Vue와 Express를 합쳐서 통합 프로젝트 만들기](https://blog.hanumoka.net/2018/11/13/vue-20181113-vue-how-to-make-vue-express-project/)
