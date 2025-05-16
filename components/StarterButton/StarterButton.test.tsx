import { render, screen } from '@/test-utils';
import  StarterButton  from './StarterButton';

describe('StarterButton component', () => {
  it('Checks if button is on screen', () => {
    render(<StarterButton />);
    expect(screen.getByText('Tung'))
  });
});