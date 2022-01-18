# Project Overview

This project was created on January 15th and completed on January 17th 2022 as part of a Shopify front end developer intern application. 
The outline of the project can be found here: https://docs.google.com/document/d/13zXpyrC2yGxoLXKktxw2VJG2Jw8SdUfliLM-bYQLjqE/edit# 

I would describe my coding style as straight forward and clean. I aim to separate logic into different files
and import these files where needed. This project is not quite extensive enough to show the advantages of this style.
I aim to balance concise coding and readability. 

If you have any questions regarding this project, please don't hesistate to ask! Comments and suggestions are welcome too.

## Video explanation
I made a series of TikTok videos documenting my thought process while developing the website.
Part 1: https://www.tiktok.com/@180dayz/video/7053673963142073605?is_from_webapp=1&sender_device=pc&web_id7052194259181192710
Part 2: https://www.tiktok.com/@180dayz/video/7053993129694760197?is_from_webapp=1&sender_device=pc&web_id7052194259181192710
Part 3: https://www.tiktok.com/@180dayz/video/7054280545978699014?is_from_webapp=1&sender_device=pc&web_id7052194259181192710

## Front end
I began by working on the front end design. This involved:
- Laying out elements on screen
- Creating components where appropriate
- Styling these components (which I did using JS due to improved error handling and readability)
- Implementing conditional rendering with turnary statements
    - I animated to star icon
    - I truncated the description and showed "more" or "less" allowing the user to toggle the information shown
    - I added a loading spinner while waiting for API response
- Improving usability with props

## Back end
Next, I worked on the backend which relatively was simple for this project.
I looked into the NASA API documentation and configured my request with Postman.
Once this was working, I created a separate file (api.js) to call the API.
I destructed the response and mapped the data to Post component properties.

After a few more finishing touches like adding a drop shadow to the Posts,
I pushed the project to Heroku. Heroku provides free hosting.

