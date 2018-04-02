import * as React from 'react'
import { Helmet } from 'react-helmet'
import Header from 'components/Header'

import 'normalize.css/normalize.css'
import './index.scss'

const TemplateWrapper: React.SFC<any> = ({ children }) => (
  <div>
    <Helmet
      title="Sai Karthik's Portfolio"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

export default TemplateWrapper
