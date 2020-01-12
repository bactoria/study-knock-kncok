# @Prop :: Property Decorator


## Property Decorator

```typescript
class Greeter {
  @format("hello, %s")
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    let formatString = getFormat(this, "greeting");
    return formatString.replace("%s", this.greeting);
  }
}
```

```typescript
import "reflect-metadata";

const formatMetadataKey = Symbol("format");

function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
```

&nbsp;

---

&nbsp;

## @Prop

### JS vs TS

```javascript
// JS
Vue.component('child', {
  props: ['message'],
})
```
```typescript
// TS
@Component
export default class PropExample extends Vue {
  @Prop() message: string;
}
```

prop 이니까.. 부모에서 자식 컴포넌트로의 데이터 전송일 것임

기존의 뷰랑 다른점은 별로 없고 그냥 문법차이

&nbsp;

&nbsp;

### Example

**Child.vue**
```html
<template>
    <div>
        {{parentMessage}}
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'

    @Component
    export default class Children extends Vue {
        @Prop() parentMessage?: string;
    }
</script>
```

&nbsp;

**Parent.vue**

```html
<template>
    <div>
        <input type="text" v-model="message">
        <children :parentMessage="message"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Children from './Children.vue';

    @Component({
        components: {
            Children
        }
    })
    export default class Parent extends Vue {
        private message: string = '메시지를 입력해주세요.';
    }
</script>
```
