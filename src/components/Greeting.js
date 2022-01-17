// UNUSED FILE! I thought about adding this responsive greeting
// but it is unnecessary for this application & would make it less elegant

import React from 'react';

function Greeting() {
  let currentHour = new Date().getHours();
  let greeting = '';

  if (currentHour >= 22) greeting = "Good night!";            // after 10pm
  else if (currentHour >= 17) greeting = "Good evening";      // after 5pm
  else if (currentHour >= 12) greeting = "Good afternoon";    // after 12pm
  else if (currentHour >= 6) greeting = "Good morning";      // after 6am
  else if (currentHour >= 0) greeting = "Mornin' sunshine"; // really early

  return (
    <h1 style={styles.greetingStyle}>{greeting} astronaut</h1>
  )
}

const styles = {
  greetingStyle: {
    fontSize: "30px",
    textAlign: "center"
  }
}

export default Greeting;