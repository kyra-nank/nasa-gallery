import React, { useState } from "react";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

function Post({ date, title, description, source }) {

  const [isLiked, setIsLiked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  //trim the string to the maximum length, retrim if in a word
  let trimmedDescription = description.substr(0, 60);
  trimmedDescription = trimmedDescription.substr(0, Math.min(trimmedDescription.length, trimmedDescription.lastIndexOf(" ")))

  return (
    <div style={styles.postStyle}>
      <h4 style={styles.headerStyle}>{date}</h4>
      <img style={styles.imageStyle} alt="spacex crew" src={source} />
      <div onClick={() => {
        setIsLiked(prevState => { setIsLiked(!prevState) })
      }}>
        {isLiked ? <TiStarFullOutline style={styles.iconStyle} /> : <TiStarOutline style={styles.iconStyle} />}
      </div>

      {showFullDescription
        ? <h4 style={styles.captionStyle}><strong>{title} </strong>{description}... <a style={styles.anchorStyle} onClick={() => {
          setShowFullDescription(prevState => { setShowFullDescription(!prevState) })
        }}> less</a></h4>
        : <h4 style={styles.captionStyle}><strong>{title} </strong>{trimmedDescription}... <a style={styles.anchorStyle} onClick={() => {
          setShowFullDescription(prevState => { setShowFullDescription(!prevState) })
        }}> more</a></h4>}

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
    flex: "1",
    fontFamily: "Source Sans Pro"
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
  },
  anchorStyle: {
    color: "#0B3D91"
  }
}

export default Post;
