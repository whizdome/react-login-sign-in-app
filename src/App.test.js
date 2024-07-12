import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { container, debug } = render(<App />);
  console.log(container.innerHTML); // Log the HTML content for debugging purposes
  debug(); // Print the current state of the DOM
  
  // Use a function matcher for more flexibility
  const linkElement = screen.getByText((content, element) => {
    return element.textContent.includes('Learn React');
  });

  expect(linkElement).toBeInTheDocument();
});
