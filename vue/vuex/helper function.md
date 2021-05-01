# 헬퍼 함수

&nbsp;

**??.vue**
```javascript
//...
<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  computed: {
    ...mapState([ // ES6 해체문법
      'count' // this.count 를 this.$store.state.count와 매핑
    ]),
    ...mapGetters([
      'hasBoard' // this.count 를 this.$store.getters.hasBoard와 매핑
    ])
  },
  methods: {
    ...mapActions([
      'ADD_BOARD' // this.ADD_BOARD() 를 this.$store.dispatch('ADD_BOARD') 와 매핑
    ]),
    ...mapActions({
      delete: 'DELETE_BOARD' // this.delete() 를 this.$store.dispatch('DELETE_BOARD') 와 매핑
    }),    
    ...mapMutations([
      'SET_THEME' // this.SET_THEME() 를 this.$store.commit('SET_THEME') 와 매핑 
    ])
  }
}
</script>
```


