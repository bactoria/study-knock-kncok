# @Prop :: Method Decorator


## Method Decorator

```typescript
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}
```

```typescript
function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  }
}
```

=> 이해 안됨

&nbsp;

---

&nbsp;

## @Watch

### JS vs TS
 ㅜㅜㅜㅜㅜㅜㅜㅜ
```javascript
// JS
const watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: '질문해야 대답가능',
  },
  watch: {
    // question이 변경되면 아래 함수가 실행된다.
    question: function(newQuestion) {
      this.answer = '입력 기다리는 중...';
    }
  }
})
```
```typescript
// TS
@Component
export default class WatchExample extends Vue {
  question: string = '';
  answer: string = '질문해야 대답가능',

  @watch('question')
  watcher() {
    this.answer = '입력 기다리는 중...';
  }
}
```

&nbsp;

&nbsp;

### (Option)

```typescript
@Watch('message', {imediate: true, deep: true})
```

`imediate`: 페이지 로드 시 즉시 실행할지 여부  
`deep`: 속성이 객체일 경우, 객체 내부가 변경되는지도 감시할지 여부

&nbsp;

&nbsp;

### Example

```html
<template>
    <div>
        <input type="text" v-model="message">
        <div>{{message}}</div>
        <div>{{alertMessage}}</div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";

    @Component
    export default class Message extends Vue {
        private message: string = '메시지를 입력해주세요.';
        private alertMessage: string = '';

        @Watch('message')
        update(value: string, oldValue: string) {
            if (value.length > oldValue.length) {
                this.alertMessage = '더 길어졌다!';
            } else {
                this.alertMessage = '';
            }
        }
    }
</script>

```


