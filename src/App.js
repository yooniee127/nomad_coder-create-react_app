import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Detail from "./router/Detail"
import Home from "./router/Home"

function App() {
  return <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
  </Router>;
}
export default App;
