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
&nbsp;

## 프로젝트에서 Vuex

실제로는 아래와 같은 구조로 사용. (뇌피셜.. 최소한 나는 이럼)

### 트리
```
src
 ├─api
 │     index.js
 │
 └─store
       actions.js
       getters.js
       index.js
       mutations.js
       state.js
```



**src/store/index.js**
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import state from './state'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  mutations,
  getters,
  state
})

export default store

```

**src/store/actions.js**
```javascript
import { board } from '../api'

const actions = {
//...
}
export default actions 
```

**src/store/mutations.js**
```javascript
const mutations = {
//...
}
export default mutations
```

**src/store/getters.js**
```javascript
const getters = {
//...
}
export default getters
```

**src/store/state.js**
```javascript
const state = {
//...
}
export default state
```
