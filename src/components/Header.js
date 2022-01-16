import React from 'react';

function Header() {

  return (
    < div style={styles.headerStyle}>
      <h2 style={styles.titleStyle}>Welcome to Astro</h2>
      <p style={styles.authorStyle}>By <a style={styles.anchorStyle} href="https://www.linkedin.com/in/kyranank/">Kyra Nankivell</a></p>
    </div>
  )
}

const styles = {
  headerStyle: {
    textAlign: "center"
  },
  titleStyle: {
    margin: "30px 0 10px 0"
  },
  authorStyle: {
    margin: "0 0 20px 0"
  },
  anchorStyle: {
    color: "#0B3D91",
    textDecoration: "none"
  }
}

export default Header;