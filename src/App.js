import React from "react"
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Homenews from './components/Homenews'
import  Firebasecomp from  './components/firebase'
import Dialog from './components/dialog'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  
 
  
  render() {
    
    return (
       
      <Router>
      <Switch>
          <Route path="/" exact component={Firebasecomp} />
          <Route path="/Home" exact component={Homenews} />
          <Route path="/share/news" exact component={Dialog} />
      </Switch>
      </Router>
    )
  }
}


export default App;