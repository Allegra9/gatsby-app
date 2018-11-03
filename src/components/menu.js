import React from 'react'
import { Link } from 'gatsby'

const Menu = () => {
  return (
    <div style={{
        background: '#f4f4f4',
        paddingTop: '10px'
      }}>
      <ul style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-evenly'
        }}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/page-2'>Page 2</Link></li>
      </ul>
    </div>
  )
}

export default Menu