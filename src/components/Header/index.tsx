import * as React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const HeaderDiv = styled.div`
  background: black;
  margin-bottom: 1.45rem;
`

// tslint:disable-next-line:no-any
const Header: React.SFC<any> = () => (
  <HeaderDiv>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </HeaderDiv>
)

export default Header
