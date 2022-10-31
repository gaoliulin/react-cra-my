# react-cra-my
This project is for me to learn react


#HOC
HOC（High Order Component） 是 react 中对组件逻辑复用部分进行抽离的高级技术，但HOC并不是一个 React API 。 它只是一种设计模式，类似于装饰器模式。




redux
1.  createStore   创建store
2. reducer    初始化 store,并定义 reducer
3. getState   获取store 中的state
4. subscribe  订阅store
5. dispatch   action   派发action 到 reducer

react-redux

1.previder   提供者：挂载传递store, 类比react context
2.connect   连接：映射  store, dispatch 到组件   。connect（mapStoreToProps,  mapDispatchToProps ）（组件component）

react-router
三个核心库： react-router(基础库，安装后两者都会安装), react-router-dom（浏览器端）, react-router-native （r-n端）
1.router : BrowsRouter
2.Link
3.route  (exact精确匹配) : 三种渲染方式优先级： children （不匹配location.href）  > component > render
4.switch  仅匹配一个

pureComponent  与 component  
1. 实现了 showComponentUpdate(nextProps, nextState) return nextState).num !== this.state.num   ，return true 出发渲染。 线比较，

hooks
1. useState
2. useEffect  
3. useMome
4.useCallback       一定程度：   useMome == useCallback





git branch -m main master
git fetch origin
git branch -u origin/master master
git remote set-head origin -a











































# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
