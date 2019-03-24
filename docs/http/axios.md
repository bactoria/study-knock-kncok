
# Axios

&nbsp;

**Ajax(Asynchronous Javascript And Xml)**

브라우저의 `XMLHttpRequest` 객체를 이용해서 전체 페이지를 갱신하지 않고도 데이터를 로드하는 기법

클라이언트와 서버간에 XML 데이터를 주고 받을 때 사용.

&nbsp;

**Axios**

`Ajax`를 지원하는 라이브러리 중 하나

서버와 데이터를 주고받을 때 사용.

&nbsp;

**Axios 의존성 추가**
```
npm install --save axios
```

&nbsp;
&nbsp;

## Axios Config

**src/api/index.js**
```javascript
import axios from 'axios'
import router from '../router'

const server = 'http://localhost:3000'

const request = {            /*  (1)  */
  get(path) {
    return axios.get(`${domain + path}`)
      .catch(({response}) => {
        const {status} = response
        throw Error(response)
      })
  },
  post(path, data) {
    return axios.post(`${domain + path}`, data)
  },
  delete(path) {
    return axios.delete(`${domain + path}`)
  },
  put(path, data) {
    return axios.put(`${domain + path}`, data)
  }
}

export const board = {          /*  (2)  */
  fetch(id) {
    if (id) {
      return request.get(`/boards/${id}`).then(({ data }) => data) /*  (3)  */
    }
    return request.get('/boards').then(({data}) => data) /*  (4)  */
  },
  create (title) {
    return request.post('/boards', { title }).then(({ data }) => data)
  },
  update(id, data) {
    return request.put(`/boards/${id}`, data).then(({ data }) => data)
  },
  destroy(id) {
    return request.delete(`/boards/${id}`)
  }
}

export const list = {           /*  (5)  */
  create(data) {
    return request.post(`/lists`, data)
  },
  update(id, data) {
    return request.put(`/lists/${id}`, data).then(({ data }) => data)
  },
  destroy(id) {
    return request.delete(`/lists/${id}`).then(({ data }) => data)
  }
}
```

(1) : request 변수 생성. (private)
(2) : board 관련 쿼리를 정의한 변수 (public)
(3) : fetch(id)  :: parameter가 있을 때
(4) : fetch()  :: parameter가 없을 때
(5) : list 관련 쿼리를 정의한 변수 (public)

&nbsp;
&nbsp;

## Use Example

**src/component/Board.vue**
```html
<template>
  <div>
    <h3>제목 : {{boardTitle}}</h3>
    <h5>내용 : {{boardContent}}</h5>
  </div>
</template>

<script>
  import { board } from '../api'

  export default {
    name: "Board",
    data() {
      return {
        boardTitle: "",
        boardContent: ""
      }
    },
    created() {
      this.fetchData(this.$route.params.id).then(data => {
          this.boardTitle = data.title;
          this.boardContent = data.content;
      })
    },
    methods: {
      fetchData(id) {
        return board.fetch(id)
      }
    }
  }
</script>
```

&nbsp;
&nbsp;

## Server

Axios 테스트를 위한 서버

`node server.js`

**server.js**
```javascript
const express = require('express');

const app = express();

// CORS
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

const boards = {
    1: {id: '1', title: '제목이야', content: '냉무냉무'},
    2: {id: '2', title: '2번째 글', content: '여기는 내용입니다.'}
};

app.get('/boards', (req, res) => {
    return res.send(Object.values(boards));
});

app.get('/boards/:id', (req, res) => {
    return res.send(boards[req.params.id]);
});

app.listen(3000, () => {
    console.log('Server is running')
})
```

&nbsp;

## Test

### http://localhost:8080/board/1
제목 : 제목이야 
내용 : 냉무냉무

&nbsp;

### localhost:8080/board/2
제목 : 2번째 글 
내용 : 여기는 내용입니다.

