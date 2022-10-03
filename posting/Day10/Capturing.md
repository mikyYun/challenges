# Event capturing
Event in child element starting from parents and passing to child

## NOTE
Bubbling and capturing is not isolated. Start from **Capturing**, end at **Bubbling**

## Prevent redundant events
Use e.target, e.currentTarget
```js
const divs = document.querySelectorAll("div");
dovs.forEach(div => {
  
  div.addEventListener("click", (e) => {
    if (e.target.className !== "clickDiv") {
      return
    };
    console.log(e.currentTarget.classname)
  })
})
```

Use e.stopPropagation
```js
const divs = document.querySelectorAll("div");
divs.forEach(div => {
  div.addEventListener("click", (e) => {
    // 1
    e.stopPropagation(); // prevent
    console.log("This will be printed only once") // child only
    
    // 2
    e.stopImmediatePropagation() // prevent all
    console.log("this will be printed and also prevent other events in same element")

    // 3
    e.preventDefault()
    console.log("This will not be printed")
  })
})

```