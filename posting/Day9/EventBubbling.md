# Event Bubbling
Event inside children move(pass) to upper tree(parents)
```html
  <body>
    <!-- To HERE -->
    <div>
      <!-- TO HERE OR -->
      <div>
        <div>
          <!-- Event HERE GOES TO UPPER TREE -->
        </div>
      </div>
    </div>
  </body>

```
<img src="./bubbling_capturing.jpg"></img>