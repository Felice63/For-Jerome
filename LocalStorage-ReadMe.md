# LocalStorage

# Local Storage API

- SEE [THIS ORIELLY VIDEO FOR LOCAL STORAGE](https://learning.oreilly.com/videos/advanced-html5/9781771370356/9781771370356-video163841/)

See **[this article](https://javascript.info/localstorage)** for more in depth info.

---
## Methods

- **setItem(key, value)** - takes a key-value pair and adds it to localStorage

- **getItem(key)** - takes a key and returns the corresponding value

- **removeItem(key)** - takes a key and removes the corresponding key-value pair

- **clear()** - clears localStorage (for the domain)

- **key(index)** - Passed a number to retrieve the key of a localStorage

- NOTE: the above are methods on localStorage object, so each method must be preceeded by the object, I.E:

- localStorage.setItem();

- localStorage.getItem();

- localStorage.removeItem();

- localStorage.clear();

- localStorage.key();
---
## Properties ##

- Also has a length property, so localStorage.length returns the number of items stored

# Local Storage and Seesion Storage

## Session  Storage
- Session storage works similar to LocalStorgae, but is temporary and disapears when the browser id refreshed.
- The setters and getters are similar, except that instead of calling the locaStorage object with properties and methods, you call the sessionStorage object and properties  and methods
- A session ends when a tab is closed or the browser itself is closed

## Local Storage
- Storing data locally in the user's browser, persists even though the browser cache may be cleared
- More secure than session storage, faster and alot of data can be stored without affecting the browser's performance
- Everything storeed in LocalStorage is a string.
