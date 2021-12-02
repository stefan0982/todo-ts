import React from 'react';
import Navbar from "./components/Navbar";
import TodosContainer from "./components/TodosContainer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import TodoPage from "./components/TodoPage";
import NoMatch from "./NoMatch";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <div className="container">
            <TodosContainer />
          </div>
        </Route>
        <Route path="/todo/:id" exact>
          <TodoPage/>
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>

    </BrowserRouter>

  );
}

export default App;
