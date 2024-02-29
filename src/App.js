import {Route, Switch} from 'react-router-dom'
import Welcome from './components/Welcome'
import Appointments from './components/Appointments'
import './app.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/appointments" component={Appointments} />
  </Switch>
)

export default App
