# CPM (chaos-particulate-matter)
display Particulate Matter grade by WHO guide line

## 사용 기술
#### fetch vs axios
axios는 browser와 nodejs에서 http요청을 보낼 수 있는 서드파트 라이브러리다.
axios는 응답값을 자동으로 json 포맷으로 변환해주며, 400에러코드 리턴시 axios는 catch블럭으로
빠지는 반면 fetch는 then으로 빠진다.
* [fetch vs axios](https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5)

#### open chromapp with kiosk mode
아래 command를 shell로 만들어서 실행하도록 한다
```
$ open -a "Google Chrome" -n --args --kiosk --app=http://localhost:3000/
```

## 디렉토리 구조
```
root
|- app                        # front workspace, vue.js
|- server                     # backend workspace, node.js
|- dist                       # result of webpack build
|- node_modules               # dependencies
|- package.json                 
|- webpack.server.config.js   # for build server
|- webpack.app.config.js      # for build app
```

## 이슈
#### **express views path setting시 path 발견하지 못한다**
  - webpack에 __dirname에 default 값은 mock value인 "/"이다
  - webpack.config.js에서 node 프로퍼티에 __dirname을 "true"로 세팅하면 real dirname이 된다
  - [webpack node 프로퍼티](https://webpack.github.io/docs/configuration.html#node)

## 참조 사이트
* [express using router instead of express app tdd](http://evanshortiss.com/development/javascript/2016/04/15/express-testing-using-ioc.html)
* [node.js tdd](http://seokjun.kr/node-js-tdd/)
* [vue.js with express](https://vuejs-kr.github.io/2017/02/05/express-with-vue/)
* [axios tdd](https://github.com/mzabriskie/axios)