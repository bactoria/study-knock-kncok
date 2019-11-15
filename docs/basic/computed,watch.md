
# Computed, Watch

### computed

함수로 구성된 객체로 계산형 속성 지정 --> 선언만 하면 자동 실행


### methods
 
Vue에서 사용할 함수를 등록 --> computed와 달리 실행해야 함!!

이벤트 처리에서 많이 사용됨.

### watch



&nbsp;

|   구분   | computed(반응형 getter) |  methods   |  watch  |
| :----: | :------------------: | :--------: | :-----: |
| 언제사용?  |     값이 자주 안바뀔 때      | 값이 자주 바뀔 때 | 비동기 작업  |
|   캐싱   |          O           |     X      |    X    |
| return |        반드시 필요        |  반드시 필요X   | 반드시 필요X |


