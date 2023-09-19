# issues
### [DESKTOP & MOBILE]
0. The footer also seems to be rusing _regular_ weight in deployed site where as in figma it is _light_
1. Please double check with figma, all the char spacing and line gaps (imp).
2. FAQ page haven't been rendered yet (Can't see). 
3. HOME PAGE:
    1. Can the video start a bit faster? Maybe need to cut a bit of the front part ... Not sure if it's loading (Doesn;t seem like)
4. ABOUT US PAGE:
   
   1. Font weights used in the paragraph are _regular_. Font weight of our front (ABC Diatype) should be _Light_.  
   <figure>
     <img src="https://github.com/devATdbsutdio/dattabaumstudio.com/assets/4619862/7cdc778c-fb8c-46f2-be80-6d89dd4b0cb1" alt="Deployed Site" width="320">
     <figcaption>Deployed site</figcaption>
   </figure>
    <figure>
     <img src="https://github.com/devATdbsutdio/dattabaumstudio.com/assets/4619862/deb85acd-cacd-4090-9282-0d2a317f5319" alt="From Figma" width="320">
     <figcaption>From Figma</figcaption>
   </figure>
   
    2. Also, the spacing between the lines (in both the heading & the paragraph) are squished and not the same as placed in deisgn
    <figure>
     <img src="https://github.com/devATdbsutdio/dattabaumstudio.com/assets/4619862/524b6b9e-7161-45dd-8069-0c3003be66f0" alt="Deployed Site" width="320">
     <figcaption>Deployed site</figcaption>
    </figure>
    <figure>
     <img src="https://github.com/devATdbsutdio/dattabaumstudio.com/assets/4619862/2d9dddd6-86e8-4815-a3e0-b8f9b1963487" alt="From Figma" width="320">
     <figcaption>From Figma</figcaption>
    </figure>


### [DESKTOP]   
0. [HOME PAGE]
      1. Can the video be started a bit faster? May be chop some frames from begining? 
2. [WATCH PAGE]
      1. Video: Can the Video is missing audio: Are you using __compressed__ ver of https://drive.google.com/file/d/1J92kC6CTK1wjyxtZWTtS6W-K3ciB4yyV/view?usp=drive_link
      2. Video: We can't have a diff thumbnail image right (From what I could remember)? If it can be, then can we use the image being used in figma? It's literally a frame (which can be exported from the video) 
      3. Cards: They have a small call to action __+__ at the bottom which is not clickable right now. Let's make it clickable.
      
         <img width="320" alt="Screenshot 2023-09-15 at 21 39 40" src="https://github.com/devATdbsutdio/dattabaumstudio.com/assets/4619862/9d4051c4-6044-4edb-a587-cf0aa840e79e">
      5. Cards: Can the slide/drag of the cards be anchored with reduced elasticity? (Like in the mobile version, it's good)
         
         ![anim](https://github.com/devATdbsutdio/dattabaumstudio.com/assets/4619862/ac3ccce9-47d4-457c-8f71-58cb98835d36)
      6. Cards: When the cards open, can the surrounding back mask be a bit more dark (less transparent)
      7. Cards: The "close X" has a gray outline (in both mobile & desktop) and when the mouse is hovered on the close button it creates a white box as well (I forgot if there was a call to action size change or something there, if Marina suggested something).

           
      8. [technical section] can the image on the left be moved up (like in figma)

           <figure>
             <img src="https://github.com/devATdbsutdio/dattabaumstudio.com/assets/4619862/8ea4006d-95cf-414c-9fc6-ddfe73569c11" alt="Deployed Site" width="320">
             <figcaption>Deployed site</figcaption>
           </figure>
           <figure>
             <img src="https://github.com/devATdbsutdio/dattabaumstudio.com/assets/4619862/e43bee88-f3f1-4d96-850c-1a3f91c50357" alt="From Figma" width="320">
             <figcaption>From Figma</figcaption>
           </figure>


### [MOBILE PAGE]
0. [HOME PAGE]
      1. Can the video be started a bit faster? May be chop some frames from begining? 
2. [WATCH PAGE]
      1. Video: Can the Video is missing audio: Are you using __compressed__ ver of https://drive.google.com/file/d/14V0pz5vW__E53Iow-PrHEfMn9DRmo8uQ/view?usp=drive_link
      2. Video: We can't have a diff thumbnail image right (From what I could remember)? If it can be, then can we use the image being used in figma? It's literally a frame (which can be exported from the video)
      3. Cards: The "close X" has a gray outline (in both mobile & desktop) and when the mouse is hovered on the close button it creates a white box as well (I forgot if there was a call to action size change or something there, if Marina suggested something).
3. [PRIVACY Policy] is rendered weirdly:
   
      <img width="320" alt="Mobile Privacy" src="https://github.com/devATdbsutdio/dattabaumstudio.com/assets/4619862/a0a580ac-370f-40ee-9f75-fb768419c247">

   


# TBD
1. Cookie Policy? How do we deal with that? The banner need to be deisgned?
2. Where are you currently storing the assets? (Sorry if I'm asking it again)
3. [Datta] Check copy of cards
4. [Datta] Check remaining part of Terms Page (TBD Oct)
5. Documentation of the site dev (in README (and remove the astro stuff )):
    1. Where Assets are? I see some in github ... We were thinking of moving them to Shopify correct? (Highlight that in the documentation) 
    2. About the CICD pipeline (e.g.:When you edit something and commit it pushed dev for the policy pages).
    3. Show and give a light instructions on how and where people can edit contents.
    4. [FUTURE NOTE]: How it's conncted at the backend to our shipment company and bank. 

