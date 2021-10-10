import "./App.scss"
import { Route, Redirect } from "react-router-dom"
import Login from "./login/login.jsx"
import Register from "./register/rejister.jsx"

function App() {
  return (
    <div className='App'>
      {/* <ul>
        <li>
          <Link to='/login'>登录</Link>
        </li>
        <li>
          <Link to='/register'>注册</Link>
        </li>
      </ul> */}

      {/* 配置路由规则  exact表示精确匹配，防止匹配其他页面的时候匹配到/，也就是首页*/}
      <Route path='/login' exact component={Login}></Route>
      <Route path='/register' component={Register}></Route>
      <Redirect to="/login" />
    </div>
  )
}

export default App
