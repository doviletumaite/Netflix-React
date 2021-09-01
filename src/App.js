import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Gallerie from "./components/Gallerie";
import MyFooter from "./components/MyFooter";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShowDetail from "./components/ShowDetail";
import detail from "./components/Detail";

function App() {
  return (
    <Router>
      <div className="body">
        <MyNavbar />
       
        <Route path="/details/:movieID" render={(routerProps) => <ShowDetail {...routerProps} title="Movie Details" />} />
  

        <div className="break"></div>
        <MyFooter />
      </div>
    </Router>
  );
}

export default App;
