# Can I put my indexes in an indexes folder instead of at src level to keep it clean?
If not, update webpack.config:  fpsJSFunctions: path.resolve(__dirname, 'src/indexes/index.ts')  // myServices is the name of the library - external reference name:  myServices.js

# How do I get web pack analyizer working?
In a web part project, I add it to the gulpfile.js
Did I do it correctly in webpack.config?  I followed this guide:  https://digitalfortress.tech/debug/how-to-use-webpack-analyzer-bundle/


