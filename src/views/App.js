import "./App.scss"
import { Route, Redirect, Switch } from "react-router-dom"
import Login from "./login/login.jsx"
import Register from "./register/rejister.jsx"

function App() {
  return (
    <div className='App'>
      <Switch>
        {/* 配置路由规则  exact表示精确匹配，防止匹配其他页面的时候匹配到/，也就是首页*/}
        <Route path='/login' exact component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <Redirect to='/login' />
      </Switch>
    </div>
  )
}

export default App
