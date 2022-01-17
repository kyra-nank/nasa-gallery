import React, { useEffect, useState } from 'react';
import Post from './Post'
import getImages from "../api";
import RingLoader from "react-spinners/RingLoader";

function Collection() {

  const [imageList, setImageList] = useState([]);

  // useEffect(async () => {

  //   const response = await getImages();
  //   const { collection: { items } } = response;
  //   setImageList(items);

  // }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await getImages();
      const { collection: { items } } = response;
      setImageList(items);
    }

    fetchData();
  }, [])

  return (

    <div style={styles.collectionStyle}>

      {imageList.length === 0
        ? <RingLoader css={styles.spinnnerStyle} color="#FC3D21" speedMultiplier={2} loading={true} />
        : imageList.map((image) => {
          return (
            <Post
              date={image.data[0].date_created.substr(0, 10)}
              title={image.data[0].title}
              description={image.data[0].description}
              source={image.links[0].href}
            />
          );
        })
      }

    </div>
  )
}

// I prefer adding styles with JS for error handling & clarity

const styles = {
  collectionStyle: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  spinnnerStyle: {
    marginTop: "30%",
    size: "50px"
  }
}

export default Collection;