# Server side rendering

Before mid 1990, internet was for the Static Sites.

After 1996, `<iframe>` tag developed and it made partly updatable in a page

In 1998, XMLHttpRequest API was developed. It made possible to passing JSON format, updating page by generating html elements dynamically with javascript.

In 2005, it named `Ajax`. It led development of `SPA`.

As technologies developed, well-standarized programming languages(JS like Angular, React, and Vue), CSR(Client side rendering) started.

CSR: index.js has all resources(libraries, frameworks). And if it is required extra resources, request data to server then use the data.

Problem 
1. Initial Loading may take too long
2. Low Search Engine Optimization

Those problems made SSR(Server side rendering) started.

SSR
1. Access web page
2. Generate HTML file in server then pass it to the client with source codes

Advantages of SSR
1. Great SEO: Fast first loading
2. All contents are in the html. Efficient SEO

Does SSR the best solution? No

Problem
1. Blinking issue like static site. Non-rich site interactions
2. Server side overhead: more clients have, the larger server loads
3. Need to wait before interacting: Dynamic actions might not work until JS fully loaded

TTV(Time To View) & TTI(Time To Interact)

```
CSR
browser -> server -> index.html -> client request js file linked in html to server -> server pass js file to client -> Viewable & Interactable

SSR
browser -> server -> index.html -> Viewable -> client request js file linked in html to server -> server pass js file to client -> Interactable
```

To improve TTV & TTI,

for CSR => minimize components so that primary components loaded first

for SSR => consider faster UI & UX

SSG(Static Site Generation)

Ex) React + Gatsby(OR Next.js)
