import React from 'react'
import '../../assets/stylesheets/application.css';
import { Link } from 'react-router-dom'
import moment from "moment";
import { displayHeaderAndFooterInIframe } from '../../utils/utils'

export const Footer = () => {
  const displayFooter = displayHeaderAndFooterInIframe()

  const footer = (
    <footer className="footer">
      <div className="container">
        <p className="rights">{moment().format('YYYY')} Echelon Launchpad. All rights reserved.</p>
        <Link className="logo" to='/'/>
        
      </div>
    </footer>
  )

  return displayFooter ? footer : null
}
