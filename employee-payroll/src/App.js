import React from "react";
import "./App.css";
import PayrollForm from "./components/payroll-form/payroll-form";
import PayrollHome from "./components/payroll-home/payroll-home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/payroll-form">
              <PayrollForm />
            </Route>
            <Route exact path="/home">
              <PayrollHome />
            </Route>
            <Route exact path="/payroll-form/:id">
              <PayrollForm />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
