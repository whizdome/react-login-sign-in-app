import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react';

test('renders learn react link', () => {
  // Render the App component wrapped in act
  act(() => {
    render(<App />);
  });

  // Log the HTML content for debugging purposes
  console.log(document.body.innerHTML);

  // Search for the link element with the text "learn react"
  const linkElement = screen.getByText(/learn react/i);
  
  // Check if the element is in the document
  expect(linkElement).toBeInTheDocument();
});
