import { render, screen } from "@testing-library/react";
import TodoForm from "./TodoForm";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import React from "react";

const todoFormWrapper = () => {
  return (
    <Provider store={store}>
      <TodoForm handleFormSubmit={jest.fn()}/>
    </Provider>
  )
}

describe('<TodoForm/>', function () {
  it('should initially have button disabled', function () {
    render(todoFormWrapper())

    const submitButton = screen.getByText(/add task/i)

    expect(submitButton).toBeDisabled()

  });

  it('should enable add task button if we have typed something', function () {
    render(todoFormWrapper())

    const submitButton = screen.getByText(/add task/i)
    const input = screen.getByRole('textbox', { name: /create a task/i })

    userEvent.type(input, 'new task')

    expect(submitButton).toBeEnabled()
  });

});


