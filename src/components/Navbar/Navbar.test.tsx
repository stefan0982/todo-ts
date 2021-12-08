import { render } from "@testing-library/react";
import Navbar from "./Navbar";

describe('<Navbar/>', () => {
  it('navbar should have title: React Testing Library', () => {
    // bad practice
    const { getByRole } = render(<Navbar />)

    const navigation = getByRole('navigation')
    expect(navigation).toBeInTheDocument()

    const title = getByRole('link', { name: 'React Testing Library' })
    expect(title).toBeInTheDocument()
  })
})
