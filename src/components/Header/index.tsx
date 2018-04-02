import * as React from 'react'
import Link from 'gatsby-link'
import * as styles from './index.module.scss'

const Header: React.SFC<any> = () => (
  <div
    className={styles.header}
  >
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
  </div>
)

export default Header
