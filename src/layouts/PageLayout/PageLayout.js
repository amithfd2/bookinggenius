import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

export const PageLayout = ({ children }) => (
  <div>
    
    <Header />

    <div className='page-layout__viewport'>
      {children}
    </div>

    <Footer />

  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
