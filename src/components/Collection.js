import React from 'react';
import Post from './Post'

function Collection() {
  return (
    <div style={styles.collectionStyle}>
      <Post />
      <Post />
      <Post />
    </div>
  )
}

const styles = {
  collectionStyle: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center"
  }
}

export default Collection;