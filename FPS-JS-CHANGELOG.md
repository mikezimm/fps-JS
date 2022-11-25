# Publish hints:

npm run clean
npm run build
npm version major/minor/patch
npm publish --access=public

npm install @mikezimm/fps-js@1.0.0

# Changelog

## 1.0.0 - 2202-Nov-24

### General

- Initial build and creating first component

Created src\pnpjs\Lists\getVX folder - intent is for support functions and constants that apply to both Pnpjs V2 and V3

functions:
- getSelectColumns - 
    takes in array of string columns with / and just gets actual columns less drilldown functions

- getExpandColumns
    takes in array of string columns with / and only gets columns which should be expanded (ignoring Drilldown functions)

- getLinkColumns
    identifies columns which do not have special /GetLinkDesc string functions in Drilldown

- getFuncColumns - Exept returns array of IFunctionError objects instead of actual react in order to keep react out of this library
    This function gets columns known to be Function columns in the Drilldown web part logic