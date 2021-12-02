import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../pages/home/index"
import Detail from '../pages/movieDetail/filmDetail'
import starRating from "../component/starRating/startRating";


function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default Routes