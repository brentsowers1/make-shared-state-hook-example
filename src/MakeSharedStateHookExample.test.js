import { fireEvent, waitFor, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import MakeSharedStateHookExample from './MakeSharedStateHookExample';

test('renders initial content', () => {
  render(<MakeSharedStateHookExample />);
  const counterValue = screen.getByText(/counter value/i);
  expect(counterValue).toBeInTheDocument();
});
