# @Emit :: Method Decorator


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

=> 이해 안됨 X 2

&nbsp;

---

&nbsp;

## @Emit

### JS vs TS

```javascript
// JS
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addToCount(n) {
      this.count += n;
      this.$emit('add-to-count', n)
    },
    resetCount() {
      this.count = 0;
      this.$emit('reset')
    },
    returnValue() {
      this.$emit('return-value', 10)
    },
    promise() {
      const promise = new Promise(resolve => {
        setTimeout(() => {
          resolve(20)
        }, 0)
      });

      promise.then(value => {
        this.$emit('promise', value)
      })
    }
  }
}
```
```typescript
// TS
@Component
export default class EmitExample extends Vue {
  count = 0;

  @Emit()
  addToCount(n: number) {
    this.count += n;
  }

  @Emit('reset')
  resetCount() {
    this.count = 0;
  }

  @Emit()
  returnValue() {
    return 10;
  }

  @Emit()
  promise() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(20)
      }, 0)
    })
  }
}
```

&nbsp;

&nbsp;

### Example

**Parent.vue**
```html
<template>
    <div>
        <Children @counter="counter"/>
        <div>
            <span>부모 컴포넌트</span>
            {{count}}
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Children from './Children.vue';

    @Component({
        components: {
            Children,
        },
    })
    export default class Parent extends Vue {
        count: number = 0;

        counter() {
            this.count++;
        }

    }
</script>
```

&nbsp;

**Children.vue**
```html
<template>
    <div>
        <button @click="counter">자식 컴포넌트 :: 숫자 +</button>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Vue} from "vue-property-decorator";

    @Component
    export default class Children extends Vue {
        @Emit()
        counter() {
        }
    }
</script>
```

