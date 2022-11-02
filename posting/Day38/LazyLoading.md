# Lazy Loading

## What is Lazy Loading
When a user opens a web page, the contents of the entire page are downloaded and rendered in a single move. This allows the browser to cache web pages, but there is no guarantee that all content downloaded by the user will be actually be visible.

For example, if user downloaded the full Photo Gallery, but the user left after viewing only the first image, the web page is caused by a waste of memory and bandwidth.

Lazy Loading creates pages with placeholder content and replaces them with actual content only when users need it. It means, lazy loading is a technology that loads non-critical resources later when pages are read. Instead, these non-critical resources should be loaded when needed.

The reason why we use lazy loading instead of loading images and videos is that there is possibility of loading things that users cannot see.

## How the lazy loading affect SEO?
Lazy loading affects search enging ranking. Because the resource is placeholder content, the search engine that crawls websites can misinterpret or ignore the content of the resource.

Slow loading of entire components of a webpage, such as blog posts, can cause the search engine to bypass those components and prevent content from being indexed, reducing search engine results.

* Overcome the problem
```
Provide Link
=> Create a webpage from content accessible to the search engine crawler
=> When the search engine indexes a websites, it follows these links and indexes what it searches
=> This method essentially allows users to load content dynamically while Lazy Loading also organizes websites into traditional websites
```

## Pros
1. Lazy Loading balances optimizing content delivery and simplifying the experience to users
2. Fast contents delivery
3. Content is continuously available to users, which reduces the probability that users leave the website
4. Lower resource costs

## Options
1. Simple Image Lazy Load and Fade
2. Progressively Enhanced Lazy Loading
3. Lazy Load XT jQuery Plugin
4. bLazy.js = vanilla JS Plugin
5. Image blur
6. else....
```
​https://github.com/aFarkas/lazysizes​
​https://github.com/ApoorvSaxena/lozad.js​
​https://github.com/malchata/yall.js​
​https://github.com/jasonslyvia/react-lazyload (a.k.a react)
​https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/
```

## How to?
1. Use Inline Image
2. Intersection observer
3. EventHandler
4. CSS attributes


## Caution
1. fold_ default section
2. layout and placeholder
3. delay image decoding
4. cannot load
5. usability of JS