import "./App.scss"
import { Route, Redirect, Switch } from "react-router-dom"
import Login from "./login/login.jsx"
import Register from "./register/rejister.jsx"
import Home from "./home/home.jsx"

function App() {
  return (
    <Switch>
      {/* 配置路由规则  exact表示精确匹配，防止匹配其他页面的时候匹配到/，也就是首页*/}
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
      <Redirect to='/login' />
    </Switch>
  )
}

export default App
