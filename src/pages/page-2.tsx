import * as React from 'react'
import Link from 'gatsby-link'

// tslint:disable-next-line:no-any
const SecondPage: React.SFC<any> = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
