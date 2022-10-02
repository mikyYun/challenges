# React side note
### Composition

composition : component insidse component<br />
How ? => props

use typeof to check type 
scalability : to perform with various solutions(situations, conditions) 

### HOC
Receive function || class component then return function || class component

### Memoization
* React.memo => Memo after comparing HOC / Props
* callback => useCallback to memoization functions
* value => useMemo to memoization variables
```js
useMemo(() => fn, dep);
useCallback(fn, dep);
```
* profiler ??

### Context 
* To resolve Props drilling 
* Reusable => difficult to reuse
* API => createContext / Provider / Consumer
* useContext => instead Consumer

### Portals
* Render child outside DOM Structure
```js
  import {createPortal} from "react-dom";

  const Portal = () => {
    return createPortal(...)
  }
  const App = () => {
    return (
      <div>
        <Portal />
        <Portal>
          <button>
            buttonPortal
          </button>
        </Portal>
        <button>buttonApp</button>
      </div>
    )
  }
```

### VDOM
* Store in virtual state or virtual expressions in memory and sync with actual DOM 
