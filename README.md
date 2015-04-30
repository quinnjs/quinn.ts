# Quinn: A TypeScript Example

The app will compile automatically (via `prepublish`).
So it should be enough to run:

```bash
npm install && npm run
```

Then open one of these URLs:

* http://localhost:8000/json - JSON response with status code
* http://localhost:8000/mine - Simple text response
* http://localhost:8000/some - Just a 404

For comparison `app.js` contains a somewhat equivalent ES5 version.

* With `iojs@<2`: `node --harmony_classes app.js`.
* With `iojs@>=2`: `node app.js`.
