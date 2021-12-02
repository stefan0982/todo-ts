import React from 'react';
import Navbar from "./components/Navbar";
import TodosContainer from "./components/TodosContainer";

const App: React.FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <TodosContainer />
      </div>
    </>


  );
}

export default App;
