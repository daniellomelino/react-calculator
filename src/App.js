import { Switch, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Calc from './components/Calc';
import './App.css';

function App() {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="/">CALC</Navbar.Brand>
        <Nav>
          <Nav.Link href="/calc/basic">Basic</Nav.Link>
          <Nav.Link href="/calc/advanced">Advanced</Nav.Link>
          <Nav.Link href="/calc/programmer">Programmer</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calc/:type" component={Calc} />
      </Switch>
    </>
  );
}

export default App;
