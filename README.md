# Datta Baum Studio

The Studio's public facing website with built in store. 

Public Facing: [dattabaumstudio.com](https://www.dattabaumstudio.com/)

For Testing and unlinked: [dattabaumstudio.vercel.app](https://dattabaumstudio.vercel.app/)

---

🌐 Built with [Astro](https://astro.build/) and [TailwindCSS](https://tailwindcss.com/) and hosted in (Linked To) [Vercel](https://vercel.com/dev-datta-baum-studio)

## ⚖️ Editing policy pages 

The policy pages are written in markdown and can be found:

1. [Terms](/src/pages/disclaimer.md)
2. [Privacy](/src/pages/privacy.md)
3. [Returns](/src/pages/returns.md)
4. [Disclaimer](/src/pages/disclaimer.md)

## ✍🏼 Editing other content 

Most of the other content is either inline in code or as JavaScript Objects. 

When editing any of these care must be taken to ensure that the content is valid HTML/JavaScript.

      Share which parts of the contents are located where, specifically "text contents"? 
      For example: "here are the main page texts ...",  etc.
      Can you show where are the assets (where they are pulled from, for example)? 
      For example: "Images locally are here ...", "video are here ...", "some other things are here ... " etc.
      What specific care should be taken? for example: "Do not leave white space ..." 

## 🔌 What's connected to what ... 🧐 ?? 

```mermaid
sequenceDiagram
      box Gray Asset Hosting 
      Participant Github
      Participant Shopify (Content)
      Participant AmazonS3 Bucket
      end
      participant Website
      box Purple Waiting List Stuff 
      participant Firebase RTDB
      participant Firebase cloudfunction
      Participant email
      end
      Github-->>Website: Static Small Assets (images, files etc.)
      Shopify (Content)-->>Website: Static Large Assets (videos etc.)
      AmazonS3 Bucket-->>Website: Drivers
      Note over AmazonS3 Bucket,Website : For serial port access in windows
      Website-->>+Firebase RTDB: "Waiting List" data
      Firebase RTDB-->>-Firebase cloudfunction: Event
      Firebase cloudfunction-->>Firebase RTDB: 
      Firebase cloudfunction-->>email: Autoreply
      
```


## 👨🏻‍💻 Deployment

- The site is automatically deployed in [Vercel](https://vercel.com/dev-datta-baum-studio/dattabaumstudio-com) on every push to the `main` branch.
- To create preview deployments before making it live, create a new branch, push to it and then create a pull request to `main`.
- This will create a preview deployment that can be shared with others.
- Once satified with the changes, merge the pull request into `main` to make it live.

__Note:__ Use the same email in github & vercel.  

