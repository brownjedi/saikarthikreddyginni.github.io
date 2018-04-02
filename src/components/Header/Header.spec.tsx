import * as React from 'react'
import { shallow } from 'enzyme'

import Header from '.'

describe('Header component', () => {
  it('renders correctly', () => {
    const rendered = shallow(
      <Header />
    )

    expect(rendered).toMatchSnapshot()
  })

  it('tests a truthy function', () => {
    expect('Hello').toBeTruthy()
  })
})
