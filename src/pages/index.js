import * as React from "react"

// styles
const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const navBar = {
  height: '100px',
  backgroundColor: '#009688',
  boxShadow: '0px 9px 18px 1px rgba(0,0,0,0.35)',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
}

const logoContainer = {
  padding: '20px',
}

const menu = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const menuItem = {
  display: 'inline',
  color: 'white',
  fontSize: '20px',
}



// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Bilal Alam</title>
      <div style={navBar}>
        <div style={logoContainer}>
          <img src="/logo.png"></img>
        </div>
        <ul style={menu}>
          <li style={menuItem}>ABOUT ME</li>
          <li style={menuItem}>CONTACT</li>
        </ul>
      </div>
    </main>
  )
}

export default IndexPage
