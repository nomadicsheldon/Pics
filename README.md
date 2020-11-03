# Pics
**A Project using the griding system for images styling and includes a search feature.**

Main focus of this project is- `Griding` for images, accessing the DOM with `refs`, state, callbacks, search and Api call.

---

## Implementation description

Folder Structure -

- api
  - unsplash.js
- components
  - App.js
  - ImageCard.js
  - ImageList.js
  - SearchBar.js
  - ImageCard.css
  
---
  
### `unsplash.js` -
This file includes baseURL setup for API calls using axios.
  
### `App.js` -
A class component because it needs state management.
`onSearchSubmit` does API call asynchronously and changes the state of `images` after API call. `onSubmit` passed as props in `SearchBar` which will invoke `onSearchSubmit`.

### `ImageCard.js` -
A class component because it needs `state` management and `ref` system.
`constructor` 
  creating a reference, it uses in react for accessing DOM elements details
  `this.imageRef = React.createRef();`
  
`setSpans` -
  getting clientHeight and dividing it by 10 for getting a properly refined image.
  
`render`
  responsible totally for UI.


### `ImageList.js` -
A functional component.
It will receive `images` as props and returns list of `ImageCard`.

### `SearchBar.js` -
A class component because it needs state management.
`onFormSubmit` will invoke a callback(`onSubmit`) which is passed from `App.js`.

### `ImageCard.css` -
`image-list` defines a grid system.

---
