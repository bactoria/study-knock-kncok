
# URL 해시(#) 제거

VueRouter 객체에 mode 속성 값 3가지가 있음. `hash`, `history`, `abstract`

&nbsp;

`localhost:8080` 접속 시 `http://localhost:8080/#/` 로 뜰 때가 있음.

**hash** 모드가 Default 이기 때문에, 해쉬값을 없애려면 `VueRouter` 객체를 history모드로 바꿔준다.

&nbsp;

**src/router/index.js**
```javascript
export default new VueRouter({
  mode: 'history',
  routes
})

//...
```

