import { fireEvent, render, screen } from "@testing-library/react"
import Power from "../Power"

it('renders Power Components', () => {
  render(<Power name="電源" />)
  const nameElement = screen.getByText(/電源 off/i)
  expect(nameElement).toBeInTheDocument()
})

it('off button disabled', () => {
  render(<Power name="電源" />)
  const offButtonElement = screen.getByRole('button', { name: 'OFF' })
  expect(offButtonElement).toBeDisabled()
})

it('on button enable', () => {
  render(<Power name='電源' />)
  const onButtonElement = screen.getByRole('button', { name: 'ON' })
  expect(onButtonElement).not.toBeDisabled()
})

it('change from off to on', () => {
  render(<Power />)
  const onButtonElement = screen.getByRole('button', {name: 'ON'});
  fireEvent.click(onButtonElement);
  expect(onButtonElement).toBeDisabled()
})