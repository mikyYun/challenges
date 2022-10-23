# NodeList

https://developer.mozilla.org/en-US/docs/Web/API/NodeList

## Live NodeLists vs Static NodeLists
### Live NodeLists
Changes in the DOM automatically update the collection.
```
  parent element(node)
  childNodes of parent node => 2

  append a childNode to parent node
  childNodes of parent node => 3
```
```js
  const parent = document.getElementById("parent")
  parent.childNodes.length // => 2
  parent.appendChild(document.createElement("div"));
  parent.childNodes.length // => 3
```

### Static NodeLists
Any changes in the DOM do not affect the content of the collection.
```js
  document.querySelectorAll() // returns a static NodeList
```

## Instance properties
1. NodeList.length

## Instance methods
```
  NodeList shows in array format. Access by index
```
1. NodeList.item()
```js
  const tables = document.getElementsByTagName("table");
  const firstTable = tables.item(1) // OR tables[1] will return second table in the DOM
```
2. NodeList.entries()

```js
  // This returns an `iterator` allowing code to go through all key/value pairs contained in the collection.
  parent.childNodes // return array formats but it's nodeList. <div.......>
  parent.childNodes.entries() // make parent's childNodes iteratorable. [index, tags...]
```
3. NodeList.forEach()
```
interface calls the callback given in parameter once for each value pair in the list, in insertion order
```
4. NodeList.keys()
```
  Returns an `iterator`, allowing code to go through all the keys of the key/value pairs contained in the collection
```
5. NodeList.values()
```
Returns an `iterator` allowing code to go through all values(nodes) of the key/value pairs contained in the collection
```

## Possible to loop over the items in a `NodeList`
```
(x) for...in
(o) for...of
(o) c-loop
```

## NodeList vs Arrays
1. Can iterate through a `NodeList` using `forEach()` and directly access its nodes using an index value
2. Cannot use array methods like `push()`, `pop()`, `join()`, and `valueOf()`.... for NodeList
3. `NodeList` can be converted to a real array using the `Array.from()` method(in modern browsers)

## Summary
1. A `NodeList` is a collection of element nodes(DOM elements)
2. A `NodeList` can be live or static
3. The `document.querySelectorAll()` method can be used to create a static `NodeList` in JS
4. The total number of nodes inside a `NodeList` can be displayed using the `length` property.
5. JavaScript provides several ways to `iterate` over a `NodeList` object. The easiest one is the `forEach()` method.
6. A `NodeList` is not an array, so basic array methods will not work for it.
7. A `NodeList` is very similar to an HTMLCollection, except that `NodeList` items are only accessible through their index number (0, 1, 2, ....), while an HTMLCollection elements can be accessed with an index number, name, or ID.