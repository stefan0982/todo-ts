import { screen } from "@testing-library/react";
import TodoItem from "./TodoItem";
import { renderWithRedux } from "../../test-utils";
import userEvent from "@testing-library/user-event";
import * as reactRedux from "react-redux";
import { removeTodoTrigger } from "../../features/todo/todoSlice";

describe('<TodoItem/>', function () {

  it('should have delete and edit icons', async () => {
    renderWithRedux(<TodoItem handleEditItem={jest.fn()} name="test todo item" id={1} />)

    // bad approach
    const removeIcon = screen.getByTestId('remove')
    const editIcon = screen.getByTestId('edit')

    expect(editIcon).toBeInTheDocument()
    expect(removeIcon).toBeInTheDocument()
  })

  it('should handle edit functionality with mock server', function () {
    const mockedHandleEditItem = jest.fn()

    const oldTodoName = 'test todo item';
    const newTodoName = 'we updated task';
    renderWithRedux(<TodoItem handleEditItem={mockedHandleEditItem} name={oldTodoName} id={1} />)

    const editIcon = screen.getByTestId('edit')

    userEvent.click(editIcon)

    const input = screen.getByRole('textbox', {name: 'Create a task'})
    const editButton = screen.getByRole('button', {name: /edit task/i})

    userEvent.clear(input)
    userEvent.type(input, newTodoName)

    const expected = {
      id: 1,
      name: newTodoName
    };

    userEvent.click(editButton)
    expect(mockedHandleEditItem).toBeCalledWith(expected)

  });

  it('should mock delete action', function () {
    const mockUseDispatch = jest.spyOn(reactRedux, 'useDispatch');
    const mockAction = jest.fn();
    mockUseDispatch.mockReturnValue(mockAction);
    renderWithRedux(<TodoItem handleEditItem={mockAction} name="test todo item" id={1} />)

    const removeIcon = screen.getByTestId('remove')

    const expected = {
      type: removeTodoTrigger.type,
      payload: 1
    }

    userEvent.click(removeIcon)
    expect(mockAction).toBeCalledWith(expected)
  });

});
