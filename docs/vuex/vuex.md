# Vuex

&nbsp;

상태관리 용이.

단방향 흐름을 지킬 수 있게 도와줌.

코드가 깔끔해짐

&nbsp;

![](./assets/vuex.png)
[vuex Reference](https://vuex.vuejs.org/kr/)

&nbsp;

**Vuex 의존성 추가**
```
npm install --save vuex
```

&nbsp;

### vuex store 생성

**src/store/index.js**
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import { board } from '../api'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    //...
  },
  mutations: {
    //...
  },
  actions: {
    //...
  },
  getters: {
    //...
  }
})

export default store
```

`state` : data

`mutations` : state에 있는 data를 변경 - 동기

`actions` : server와 통신 - 비동기

`getters` : state에 있는 data를 사용

&nbsp;

한줄로 쭉~ 늘어나 있는 것은 가독성이 어렵다. [Code](./store.js)

&nbsp;

### vuex store 등록

**src/main.js**
```
import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
```