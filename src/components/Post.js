import React from "react";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

function Post() {



  return (
    <div style={styles.postStyle}>
      <h4 style={styles.headerStyle}>16/01/2022</h4>
      <img style={styles.imageStyle} alt="spacex crew" src="https://images-assets.nasa.gov/image/KSC-20201115-PH-BDG01_0138/KSC-20201115-PH-BDG01_0138~medium.jpg" />
      <TiStarOutline style={styles.iconStyle} />
      <h4 style={styles.captionStyle}><strong>title </strong>This is where the description will go. This is where the description will go. This is where the description will go.</h4>
    </div>
  );
}

const styles = {
  postStyle: {
    backgroundColor: "white",
    maxWidth: "400px",
    minWidth: "300px",
    border: "1px solid lightgray",
    margin: "15px",
    borderRadius: "8px",
    flex: "1"
  },
  headerStyle: {
    padding: "20px 0 20px 20px",
    margin: "0",
    fontWeight: "normal"
  },
  imageStyle: {
    width: "100%",
    objectFit: "contain",
    borderTop: "1px solid lightgray",
    borderBottom: "1px solid lightgray"
  },
  iconStyle: {
    padding: "10px 0 0 20px",
    fontSize: "25px"
  },
  captionStyle: {
    fontWeight: "normal",
    padding: "0 20px 0 20px",
    margin: "10px 0 20px 0"
  }
}

export default Post;
