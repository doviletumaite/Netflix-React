import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import Gallerie from './components/Gallerie'
import MyFooter from './components/MyFooter'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ShowDetail from './components/ShowDetail'


function App() {
  return (
    <Router>
    <div className="body">
      <MyNavbar />
      <Route path="/showdetail" exact component={ShowDetail} />
      <Link to ="/about"  bg="light">Go to gallerie</Link>
      
        <Switch>
          <Route path="/about">
            <div>Whatever</div>
          </Route>
         </Switch>
        
        
       
        <div className="break"></div>
      <MyFooter />
    </div>
    </Router>
  )
}

export default App
