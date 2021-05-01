

# Vue CLI

&nbsp;

초기 프로젝트를 쉽게 구성할 수 있도록 해줌.

&nbsp;

### Vue CLI 설치

```bash
# vue-cli 2.x
npm i -g vue-cli 

# vue-cli 3.x
npm i -g @vue/cli
```

&nbsp;

### 버전 확인

```
vue -V
```

&nbsp;
&nbsp;

## Vue 2.X

### 프로젝트 생성 :: vue init

```
vue init <template-name> <project-name>
```

#### template-name

- `webpack` :: 고급 웹팩 기능 지원
- `webpack-simple` :: 웹팩 최소 기능 지원 (프로토타이핑 용)
- `browserify` :: 고급 브라우저리파이 기능 지원
- `browserify-simple` :: 브라우저리파이 최소 기능 지원 (프로토타이핑 용)
- `simple` :: 뷰 최소 기능 지원
- `pwa` :: Progressive Web App 기능 지원

`webpack`과 `browserify` 는 **모듈 번들러** 이다.

&nbsp;
&nbsp;

## Vue 3.0 이상

### 프로젝트 생성 :: vue create

```bash
# create new project
$ vue create first-project

# choose preset
- default (babel, eslint) # Default 선택 (babel, eslint)
- Manually select features  # 사용자 직접 선택
```

&nbsp;

`Manually select features` 선택시 선택 가능한 것들이다.

- [x] Babel
- [ ] TypeScript
- [ ] Progressive Web App (PWA) Support
- [ ] Router
- [ ] Vuex
- [ ] CSS Pre-processors
- [x] Linter / Formatter
- [ ] Unit Testing
- [ ] E2E Testing

&nbsp;

`vue init` 으로 프로젝트 생성 시 매번 router, vuex를 추가로 설치해야 해서 번거로웠는데 

`vue create`를 쓰면 편하다. 템플릿까지 제공해준다.

&nbsp;
&nbsp;

### vue ui

프로젝트에서 `vue ui` 입력하고 `localhost:8000`을 접속하면 예쁜 GUI를 볼 수있다.

Plug 관리, Dependency 관리를 쉽게 할 수있다.

Vue cli가 제공하는 설정도 변경할 수 있다.

뭔가 예쁘다.

&nbsp;
&nbsp;

### webpack

`vue create` 로 프로젝트를 만들면 웹팩 설정파일인 `webpack.config.js`가 안보인다.

&nbsp;

**package.json**
```json
{
    //...
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.0.5",
    "@vue/cli-service": "^3.0.5",
    "vue-template-compiler": "^2.5.21"
  }
}
```

`vue/cli-service` 안에 설정파일이 들어가 있더라

`node_modules`/`@vue`/`cli-service`/`lib`/`config`/**base.js** 에 웹팩 Default 설정이 들어가있음.

추가적인 Custom은 **vue.config.js** 에서 하면 된다. [vue-cli 공식문서 참고](https://cli.vuejs.org/guide/webpack.html#simple-configuration)


