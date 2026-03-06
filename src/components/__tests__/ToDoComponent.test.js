import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ToDoComponent from '../ToDoComponent';

test('renders To-Do List header', () => {
  render(<ToDoComponent />);
  const headerElement = screen.getByText(/To-Do List/i);
  expect(headerElement).toBeInTheDocument();
});

test('can add a new task', () => {
  render(<ToDoComponent />);
  const inputElement = screen.getByPlaceholderText(/Enter a task/i);
  const buttonElement = screen.getByText(/Add Task/i);
  
  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  fireEvent.click(buttonElement);

  const listItemElement = screen.getByText(/New Task/i);
  expect(listItemElement).toBeInTheDocument();
});
