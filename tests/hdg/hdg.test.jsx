//@vitest-environment jsdom
import {render, screen} from '@testing-library/react'
import { test, expect } from 'vitest';
import '@testing-library/jest-dom'
// adds special assertions like toHaveTextContent
import Hdg from '../../src/pages/Hdg'


test('Has Appropriate componants', () => {
  // ARRANGE
  render(<Hdg />)


  // ASSERT
  const graph = screen.getAllByTestId('hdg-story-network')
  expect(graph).toBeInTheDocument();
})