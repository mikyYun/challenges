# React Re-rendering

## DOM and VDOM
DOM: The DOM represents what we see on our screen when we open a website, expressed through the markup language HTML. We modify the DOM with JavaScript through the DOM programming interface that contains functions like document.write, Node.appendChild or Element.setAttribute ..

VDOM: Virtual DOM of React. Another abstraction layer on top of that. State changes in the application will be applied to the VDOM first. If the new stete of VDOM requires a UI change, ReactDOM library will efficiently do this by trying to update ONLY what needs to be updated

When the VDOM gets updated, React compares it to a previous 'snapshot'(state) of the VDOM and then update only what has changed in the real DOM.

=> React makes the real DOM's re-draw process more efficiently by updating the smallest amount possible in the real DOM

### When does React re-render ?

React schedules a render every time the state of a component changes. Scheduling a render means that this doesn't happen immediately React will try to find the best moment for this. Changing the 'state' means that React triggers an update when we call 'setState'.
* This doesn't only mean the component's render function will be called
* But also that all its subsequent child components will re-render, regardless of whether their props have changed or not.

### Optimize re-render
* Inefficient re-render: when a parent component controls the state of a child component