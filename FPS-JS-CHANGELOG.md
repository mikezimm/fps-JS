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

Created src/pnpjs/Lists/getVX folder - intent is for support functions and constants that apply to both Pnpjs V2 and V3

### indexes - Created src/indexes for more easier finding/reuse buckets of imports
export * from './ArrayFindObjects';
export * from './ArrayManipulation';
export * from './ArrayObjectKeys';
export * from './ArraySortingNumbers';
export * from './ArraySortingObjects';
export * from './ArraySortingStrings';
export * from './HelpfullErrors';
export * from './LinkInterface';
export * from './PnpjsListGetBasic';
export * from './PnpjsListGetFull';
export * from './Refiners';

### pnpjs
imported npmFunctions/src/Lists/get2 folder inot pnpjs/Lists/GetVX folder
- getSelectColumns - 
    takes in array of string columns with / and just gets actual columns less drilldown functions

- getExpandColumns
    takes in array of string columns with / and only gets columns which should be expanded (ignoring Drilldown functions)

- getLinkColumns
    identifies columns which do not have special /GetLinkDesc string functions in Drilldown

- getFuncColumns - Exept returns array of IFunctionError objects instead of actual react in order to keep react out of this library
    This function gets columns known to be Function columns in the Drilldown web part logic

### logic > arrays
- imported npmFunctions/src/Services/Arrays folder into Logic/Arrays folder
- added return types to all functions
- ISeriesSort, ISeriesSortObject   : src/logic/Arrays/sorting/Interfaces.ts ( was originally in ICSSCharts but is commonly used outside of charts themselves for sorting )
- Renamed Arrays/services.ts to:  src\logic\Arrays\searching.ts ( It only has searching/finding related functions )
- Created Arrays/searching folder, split functions into ojbectfind and objectkeys
- Created Arrays/sorting folder, split into interfaces, number | string | object arrays files

### errors, logging
- imported npmFunctions/src/Services/Logging folder into Logic/Errors folder
- Only importing the friendly message logic.
- Sending the SaveLog function to fps-Pnp2 library

### components
Added folder for functions, interfaces etc specifically built for some components.  These may eventually move to the fps-React library when components are moved there.
- src/components/CarrotCharts
- src/components/CSSCharts
- src/components/Refiners

### common - interfaces or functions that seem to be used in a lot of places
- ISimpleLink with Url, Description, target? :  src/common/interfaces/links.ts
- DisplayMode so I do not need msft import : src\common\interfaces\displayMode.ts