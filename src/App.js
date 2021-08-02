import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import CityList from "./pages/CityList";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        {/* 默认路由跳转的时候匹配到指定页面 */}
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/home" component={Home}></Route>
        <Route path="/citylist" component={CityList}></Route>
      </div>
    </Router>
  );
}

export default App;
