import React from 'react';
import Post from './Post'

function Collection() {
  return (
    <div style={styles.collectionStyle}>
      <Post date="16/01/2022" title="post-one" source="https://images-assets.nasa.gov/image/KSC-20201115-PH-BDG01_0138/KSC-20201115-PH-BDG01_0138~medium.jpg" description="This is where the description will go. This is where the description will go. This is where the description will go." />
      <Post date="17/02/2022" title="post-two" source="https://images-assets.nasa.gov/image/KSC-20201115-PH-BDG01_0138/KSC-20201115-PH-BDG01_0138~medium.jpg" description="This is where the description will go. This is where the description will go. This is where the description will go." />
      <Post date="25/12/2022" title="post-three" source="https://images-assets.nasa.gov/image/KSC-20201115-PH-BDG01_0138/KSC-20201115-PH-BDG01_0138~medium.jpg" description="This is where the description will go. This is where the description will go. This is where the description will go." />
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