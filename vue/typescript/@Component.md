# @Component :: Class Decorator


## Class Decorator

```typescript
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
```

```typescript
@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
```

sealed라는 함수는 생성자를 매개변수로 받아서, 해당 생성자가 프로퍼티를 추가,삭제 할 수 없도록 봉인하는 역할을 한다.

결국, Greeter 클래스는 생성자에서 프로퍼티를 추가,삭제 할 수 없다.

&nbsp;

---

&nbsp;

## @Component

### JS vs TS

```typescript
// JS
Vue.component('App', {
    // options...
})
```

```typescript
// TS
@Component
export default class App extends Vue {}
```

&nbsp;

&nbsp;

### Example

**components/Message.vue**
```html
<template>
    <div>
        <input type="text" v-model="message">
        <div>{{message}}</div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Message extends Vue {
        private message: string = '메시지를 입력해주세요.';
    }
</script>
```

&nbsp;

**App.vue**
```html
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <message/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Message from '@/components/Message.vue';

@Component({
  components: {
    Message,
  },
})
export default class App extends Vue {}
</script>
```



