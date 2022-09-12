import React from 'react'
import { render, screen, act } from '@testing-library/react'
// subjects
import { Counter } from '../Counter'

describe('Counter', () => {
  it('should increment count when button pressed', () => {
    render(<Counter />)
    const button = screen.getByTestId('counter-button')
    expect(button.textContent).toEqual('Count - 0')
    act(() => { button.click() })
    expect(button.textContent).toEqual('Count - 1')
  })
})
