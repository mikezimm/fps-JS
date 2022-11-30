# Can I put my indexes in an indexes folder instead of at src level to keep it clean?
If not, update webpack.config:  fpsJSFunctions: path.resolve(__dirname, 'src/indexes/index.ts')  // myServices is the name of the library - external reference name:  myServices.js

# Does it make sense to have a pnp library for JS and another for React?
React is always on the page, 
In EVERY web part, fps-react will refer to fps-js in some way.
I may want to keep some things in the js library in sync with the react library.
If so, can I have 2 separate indexes and roll into each other?

# Can/Should I make my own local minimized version of microsoft classes in order to keep some typing?
PageContext >> PageContextCopy152
WebPartContext >> WebPartContextCopy152
SPPermissions >>
IPropPaneDropdown... >> Need this for EveryoneAudience or I have to split code between 2 projects which need to be together to prevent typos.

# Can I use this syntax to externalize an entire library?
"@microsoft/sp-property-pane": "*",

# Should I just externalize all the package dependancies in all libraries
and then just make them dependancies on the web part project?

# SCSS Loading
I tried following this guide to make scss work:
https://www.developerhandbook.com/webpack/how-to-configure-scss-modules-for-webpack/

But got some errors I could not resolve.

# CSS CSS CSS.... 
Had to remove src\logic\DOM\Headings\FPSHeadings.css from this package.
Maybe for now just have separate npm for css, not have any logic in it at all?
In my previous package, I ran this after cleaning but it throws an error if I add to ...
Copy-Item "C:/Users/dev/Documents/GitHub/npmFunctions/src"  -filter '*.css' "C:/Users/dev/Documents/GitHub/npmFunctions/dist" -recurse -verbose

like:
"build": "del-cli \"./?(dist|lib)\" && Copy-Item \"C:/Users/dev/Documents/GitHub/npmFunctions/src\"  -filter '*.css' \"C:/Users/dev/Documents/GitHub/npmFunctions/dist\" -recurse -verbose && tsc -p ./tsconfig.json && webpack",

# How do I get Readme and ChangeLog added to lib?
Want version history etc to be copied as well

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


