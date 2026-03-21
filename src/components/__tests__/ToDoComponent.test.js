import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToDoComponent from '../ToDoComponent';

test('renders To-Do Component and handles tasks', () => {
  const { getByPlaceholderText, getByText, getByRole } = render(<ToDoComponent />);

  const input = getByPlaceholderText('Enter a new task');
  const addButton = getByText('Add Task');

  // Simulate user input
  fireEvent.change(input, { target: { value: 'Task 1' } });
  fireEvent.click(addButton);

  // Check if the task appears in the list
  const listItem = getByRole('listitem');
  expect(listItem).toHaveTextContent('Task 1');
});
