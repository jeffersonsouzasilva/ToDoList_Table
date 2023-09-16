import { render, screen } from '@testing-library/react';
import Projetos from './index';

test('renders learn react link', () => {
  render(<Projetos />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});