import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login text', () => {
  // Render the App component
  const { container, debug } = render(<App />);
  
  // Log the rendered HTML for debugging
  console.log(container.innerHTML);
  debug(); // Optional: Print the current state of the DOM

  // Search for the text "Login" in the rendered output
  const loginElement = screen.getByText(/login/i);
  
  // Check if the element is in the document
  expect(loginElement).toBeInTheDocument();
});
