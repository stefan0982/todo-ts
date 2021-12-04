import React from 'react';
import Navbar from "./components/Navbar";
import TodosContainer from "./components/TodosContainer";
import { Provider } from "react-redux";
import { store } from "./app/store";

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="container">
        <TodosContainer />
      </div>
    </Provider>
  );
}

export default App;
