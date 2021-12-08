import React from "react";
import TodosContainer from "./TodosContainer";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { addTodoTrigger } from "../../features/todo/todoSlice";
import * as reactRedux from "react-redux";
import { renderWithRedux } from "../../test-utils";

describe('<TodosContainer/>', () => {

  it('should display message that there are not any tasks', () => {
    renderWithRedux( <TodosContainer />)

    expect(screen.getByText(/still no tasks/i)).toBeInTheDocument()
  })

  it('should mock add todo action', async () => {
    const mockUseDispatch = jest.spyOn(reactRedux, 'useDispatch');
    const mockAction = jest.fn();
    mockUseDispatch.mockReturnValue(mockAction);
    renderWithRedux( <TodosContainer />)

    const input = screen.getByRole('textbox', { name: /create a task/i })
    const submitButton = screen.getByText(/add task/i)

    const name = 'we are mocking add todo - action';
    await userEvent.type(input, name)
    expect(input).toHaveValue(name)

    const expected = {
      type: addTodoTrigger.type,
      payload: { name }
    }

    userEvent.click(submitButton)
    expect(mockAction).toBeCalledWith(expected)

  });

  it('should render 2 items from mock server', async () => {
    renderWithRedux( <TodosContainer />)

    const todos = await screen.findAllByRole('listitem')
    expect(todos).toHaveLength(2)
  });

})


