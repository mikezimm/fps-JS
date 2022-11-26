# Can I put my indexes in an indexes folder instead of at src level to keep it clean?
If not, update webpack.config:  fpsJSFunctions: path.resolve(__dirname, 'src/indexes/index.ts')  // myServices is the name of the library - external reference name:  myServices.js

# Does it make sense to have a pnp library for JS and another for React?
React is always on the page, fps-react will usually refer to fps-js.
I may want to keep some things in the js library in sync with the react library.

# How do I get web pack analyizer working?
In a web part project, I add it to the gulpfile.js
Did I do it correctly in webpack.config?  I followed this guide:  https://digitalfortress.tech/debug/how-to-use-webpack-analyzer-bundle/
I get the file but it's very high level.  Is there a way to make it show more detail?  like folder/file level?

# How to I get the same warnings for unused expressions as in a default 1.15.2 project?
I checked the eslintrc and tsconfig.json.  There are a lot of differences but it's not flagging any in this or fps-Pnp2 library.
Especially true for unused imports

# Whats diff between:
"@typescript-eslint/no-unused-expressions": "error",
'no-unused-expression': 2,




