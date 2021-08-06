import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
     
    <Router>
      
      <span>
         <Link to='/login'>  Login / </Link>
      </span>
  
      <span>
         <Link to='/register'>Register / </Link>
     </span>

      <span>
         <Link to='/profile'>Profile / </Link>
      </span>

      <span>
         <Link to='/'>Home  </Link>
      </span>
     <Switch>

       <Route path='/login'>
       <Login/>
       </Route>

       <Route path='/register'>
       <Register/>
       </Route>

       <Route path='/profile'>
       <Profile/>
      </Route>

       <Route exact path='/'>
       <Home/>
       </Route>

     </Switch>
    </Router>

 );
 
}

export default App;