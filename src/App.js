import React from 'react';
import logo from './logo.svg';
import './App.css';
//import { Button,Dropdown } from 'react-bootstrap';
import { BrowserRouter,Route,Switch,Redirect  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableCmponent from './tableComponent';
import Navbar from './components/navbar';
import {Deshboard} from './components/deshboard';
import MyProvider from './provider';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route path="/react-table-context"exact render={()=> 
            <div className="App">
            <header className="App-header">
             <TableCmponent/>
            </header>
          </div>} ></Route>
          <Route path="/desh" exact render={()=> <Deshboard/>}></Route>
          {/* <Route path="/home" exact render={()=> <Home/>}></Route> */}
        {/* <Route path="/loginForm" component={LoginForm}></Route>
        <Route path="/movies/:id" component={MovieForm}></Route>
        <Route path="/movies/:id"  component={MovieForm}></Route>
        <Route path="/movies" exact render={()=> <Movies/>}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect exact from="/" to="/movies"></Redirect>
        <Redirect to="not-found"></Redirect> */}
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
