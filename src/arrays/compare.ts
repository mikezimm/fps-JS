

/***
 *    d888888b .88b  d88. d8888b.  .d88b.  d8888b. d888888b       .d88b.  d88888b d88888b d888888b  .o88b. d888888b  .d8b.  db      
 *      `88'   88'YbdP`88 88  `8D .8P  Y8. 88  `8D `~~88~~'      .8P  Y8. 88'     88'       `88'   d8P  Y8   `88'   d8' `8b 88      
 *       88    88  88  88 88oodD' 88    88 88oobY'    88         88    88 88ooo   88ooo      88    8P         88    88ooo88 88      
 *       88    88  88  88 88~~~   88    88 88`8b      88         88    88 88~~~   88~~~      88    8b         88    88~~~88 88      
 *      .88.   88  88  88 88      `8b  d8' 88 `88.    88         `8b  d8' 88      88        .88.   Y8b  d8   .88.   88   88 88booo. 
 *    Y888888P YP  YP  YP 88       `Y88P'  88   YD    YP          `Y88P'  YP      YP      Y888888P  `Y88P' Y888888P YP   YP Y88888P 
 *                                                                                                                                  
 *                                                                                                                                  
 */

/***
 *    d888888b .88b  d88. d8888b.  .d88b.  d8888b. d888888b      d8b   db d8888b. .88b  d88.      d88888b db    db d8b   db  .o88b. d888888b d888888b  .d88b.  d8b   db .d8888. 
 *      `88'   88'YbdP`88 88  `8D .8P  Y8. 88  `8D `~~88~~'      888o  88 88  `8D 88'YbdP`88      88'     88    88 888o  88 d8P  Y8 `~~88~~'   `88'   .8P  Y8. 888o  88 88'  YP 
 *       88    88  88  88 88oodD' 88    88 88oobY'    88         88V8o 88 88oodD' 88  88  88      88ooo   88    88 88V8o 88 8P         88       88    88    88 88V8o 88 `8bo.   
 *       88    88  88  88 88~~~   88    88 88`8b      88         88 V8o88 88~~~   88  88  88      88~~~   88    88 88 V8o88 8b         88       88    88    88 88 V8o88   `Y8b. 
 *      .88.   88  88  88 88      `8b  d8' 88 `88.    88         88  V888 88      88  88  88      88      88b  d88 88  V888 Y8b  d8    88      .88.   `8b  d8' 88  V888 db   8D 
 *    Y888888P YP  YP  YP 88       `Y88P'  88   YD    YP         VP   V8P 88      YP  YP  YP      YP      ~Y8888P' VP   V8P  `Y88P'    YP    Y888888P  `Y88P'  VP   V8P `8888Y' 
 *                                                                                                                                                                              
 *                                                                                                                                                                              
 */

 import { getKeyChanges } from './checks';

/***
 *    d888888b .88b  d88. d8888b.  .d88b.  d8888b. d888888b      .d8888. d88888b d8888b. db    db d888888b  .o88b. d88888b .d8888. 
 *      `88'   88'YbdP`88 88  `8D .8P  Y8. 88  `8D `~~88~~'      88'  YP 88'     88  `8D 88    88   `88'   d8P  Y8 88'     88'  YP 
 *       88    88  88  88 88oodD' 88    88 88oobY'    88         `8bo.   88ooooo 88oobY' Y8    8P    88    8P      88ooooo `8bo.   
 *       88    88  88  88 88~~~   88    88 88`8b      88           `Y8b. 88~~~~~ 88`8b   `8b  d8'    88    8b      88~~~~~   `Y8b. 
 *      .88.   88  88  88 88      `8b  d8' 88 `88.    88         db   8D 88.     88 `88.  `8bd8'    .88.   Y8b  d8 88.     db   8D 
 *    Y888888P YP  YP  YP 88       `Y88P'  88   YD    YP         `8888Y' Y88888P 88   YD    YP    Y888888P  `Y88P' Y88888P `8888Y' 
 *                                                                                                                                 
 *                                                                                                                                 
 */



 /***
 *    d888888b .88b  d88. d8888b.  .d88b.  d8888b. d888888b      db   db d88888b db      d8888b. d88888b d8888b. .d8888. 
 *      `88'   88'YbdP`88 88  `8D .8P  Y8. 88  `8D `~~88~~'      88   88 88'     88      88  `8D 88'     88  `8D 88'  YP 
 *       88    88  88  88 88oodD' 88    88 88oobY'    88         88ooo88 88ooooo 88      88oodD' 88ooooo 88oobY' `8bo.   
 *       88    88  88  88 88~~~   88    88 88`8b      88         88~~~88 88~~~~~ 88      88~~~   88~~~~~ 88`8b     `Y8b. 
 *      .88.   88  88  88 88      `8b  d8' 88 `88.    88         88   88 88.     88booo. 88      88.     88 `88. db   8D 
 *    Y888888P YP  YP  YP 88       `Y88P'  88   YD    YP         YP   YP Y88888P Y88888P 88      Y88888P 88   YD `8888Y' 
 *                                                                                                                       
 *                                                                                                                       
 */

 /***
 *    d888888b .88b  d88. d8888b.  .d88b.  d8888b. d888888b       .o88b.  .d88b.  .88b  d88. d8888b.  .d88b.  d8b   db d88888b d8b   db d888888b 
 *      `88'   88'YbdP`88 88  `8D .8P  Y8. 88  `8D `~~88~~'      d8P  Y8 .8P  Y8. 88'YbdP`88 88  `8D .8P  Y8. 888o  88 88'     888o  88 `~~88~~' 
 *       88    88  88  88 88oodD' 88    88 88oobY'    88         8P      88    88 88  88  88 88oodD' 88    88 88V8o 88 88ooooo 88V8o 88    88    
 *       88    88  88  88 88~~~   88    88 88`8b      88         8b      88    88 88  88  88 88~~~   88    88 88 V8o88 88~~~~~ 88 V8o88    88    
 *      .88.   88  88  88 88      `8b  d8' 88 `88.    88         Y8b  d8 `8b  d8' 88  88  88 88      `8b  d8' 88  V888 88.     88  V888    88    
 *    Y888888P YP  YP  YP 88       `Y88P'  88   YD    YP          `Y88P'  `Y88P'  YP  YP  YP 88       `Y88P'  VP   V8P Y88888P VP   V8P    YP    
 *                                                                                                                                               
 *                                                                                                                                               
 */


/***
 *    d88888b db    db d8888b.  .d88b.  d8888b. d888888b      d888888b d8b   db d888888b d88888b d8888b. d88888b  .d8b.   .o88b. d88888b .d8888. 
 *    88'     `8b  d8' 88  `8D .8P  Y8. 88  `8D `~~88~~'        `88'   888o  88 `~~88~~' 88'     88  `8D 88'     d8' `8b d8P  Y8 88'     88'  YP 
 *    88ooooo  `8bd8'  88oodD' 88    88 88oobY'    88            88    88V8o 88    88    88ooooo 88oobY' 88ooo   88ooo88 8P      88ooooo `8bo.   
 *    88~~~~~  .dPYb.  88~~~   88    88 88`8b      88            88    88 V8o88    88    88~~~~~ 88`8b   88~~~   88~~~88 8b      88~~~~~   `Y8b. 
 *    88.     .8P  Y8. 88      `8b  d8' 88 `88.    88           .88.   88  V888    88    88.     88 `88. 88      88   88 Y8b  d8 88.     db   8D 
 *    Y88888P YP    YP 88       `Y88P'  88   YD    YP         Y888888P VP   V8P    YP    Y88888P 88   YD YP      YP   YP  `Y88P' Y88888P `8888Y' 
 *                                                                                                                                               
 *                                                                                                                                               
 */

// import { ICompareObject, IComparePair, IIncludeOrIgnore, ICompareKeysResult } 
//     from '@mikezimm/npmfunctions/dist/Services/Arrays/compare';

// import { compareFlatObjects, getListOfKeysToCompare, buildEmptyCompareResults,  } 
// from '@mikezimm/npmfunctions/dist/Services/Arrays/compare';

export type IIncludeOrIgnore = 'Ignore' | 'Include' ;

export interface ICompareObject { 
    obj: any;
    title: string;
    idx: number;
    status: 'Match' | 'NotFound' | 'NoMatch' ;
}

export interface IComparePair {
    obj1: ICompareObject;
    obj2: ICompareObject;
}

export interface ICompareKeysResult {
  [key: string]: string[] | IIncludeOrIgnore | boolean | null | any | undefined;
  flagKeys: string[];
  flagStyle: IIncludeOrIgnore;
  ignoredKeys:  string[];
  compareKeys: string[];
  keyChanges: null | any;
  identicalKeys: string[];
  differentKeys: string[];
  newKeys: string[];
  success: boolean;
}

export function buildEmptyCompareResults( ignoreKeys: string[], flagStyle  : IIncludeOrIgnore ) {

  let compareKeysResult: ICompareKeysResult = {
      flagKeys: ignoreKeys,
      flagStyle: flagStyle,
      ignoredKeys: [],
      compareKeys: [],
      keyChanges: null,
      identicalKeys: [],
      differentKeys: [],
      newKeys: [],
      success: false,
  };
  return compareKeysResult;
}

/***
 *     .o88b.  .d88b.  .88b  d88. d8888b.  .d8b.  d8888b. d88888b                                     
 *    d8P  Y8 .8P  Y8. 88'YbdP`88 88  `8D d8' `8b 88  `8D 88'                                         
 *    8P      88    88 88  88  88 88oodD' 88ooo88 88oobY' 88ooooo                                     
 *    8b      88    88 88  88  88 88~~~   88~~~88 88`8b   88~~~~~                                     
 *    Y8b  d8 `8b  d8' 88  88  88 88      88   88 88 `88. 88.                                         
 *     `Y88P'  `Y88P'  YP  YP  YP 88      YP   YP 88   YD Y88888P                                     
 *                                                                                                    
 *                                                                                                    
 *    d88888b db       .d8b.  d888888b       .d88b.  d8888b.    d88b d88888b  .o88b. d888888b .d8888. 
 *    88'     88      d8' `8b `~~88~~'      .8P  Y8. 88  `8D    `8P' 88'     d8P  Y8 `~~88~~' 88'  YP 
 *    88ooo   88      88ooo88    88         88    88 88oooY'     88  88ooooo 8P         88    `8bo.   
 *    88~~~   88      88~~~88    88         88    88 88~~~b.     88  88~~~~~ 8b         88      `Y8b. 
 *    88      88booo. 88   88    88         `8b  d8' 88   8D db. 88  88.     Y8b  d8    88    db   8D 
 *    YP      Y88888P YP   YP    YP          `Y88P'  Y8888P' Y8888P  Y88888P  `Y88P'    YP    `8888Y' 
 *                                                                                                    
 *                                                                                                    
 */

 /**
  * This function will
  *     take 2 flat objects baselineObject & compareObject
  *     take array of strings to compare with baselineObject keys
  *     take flagStyle which tells to include or ignore keys found in flagKeys
  *     
  *     return compareKeysResult object back which gives all information regarding comparing the 2 objects
  * 
  * @param baselineObject 
  * @param compareObject 
  * @param flagKeys 
  * @param flagStyle 
  * @param parseMe 
  */
export function compareFlatObjects( baselineObject: any, compareObject : any, flagKeys: string[], flagStyle: IIncludeOrIgnore ) {


  let identicalKeys: string[] = [];
  let differentKeys: string[] = [];
  let newKeys: string[] = [];
  let isBaselineNull = false;

  let compareKeysResult: ICompareKeysResult = getListOfKeysToCompare( baselineObject, flagKeys, flagStyle );
  if ( compareKeysResult.success === false ) {
      isBaselineNull = true;
      compareKeysResult = getListOfKeysToCompare( compareObject, flagKeys, flagStyle );
  }

  compareKeysResult.keyChanges = getKeyChanges( baselineObject, compareKeysResult.compareKeys, compareObject, false );

  //Get identical keys
  compareKeysResult.compareKeys.map( compareKey => {
    if ( Object.keys( compareKeysResult.keyChanges).indexOf( compareKey ) > -1 ) { differentKeys.push( compareKey ); } else { identicalKeys.push( compareKey ); }
  });

  //Get newKeys not in the baselineObject
  if ( baselineObject && compareObject ) {
      //Only do this if baseline object exists
      Object.keys( compareObject ).map( oldKey => {
          if ( Object.keys( baselineObject ).indexOf( oldKey ) === -1 ) { newKeys.push( oldKey ) ; }
        });
  } else  {
      //If baseline object does not exist, newKeys is really all the keys in the compareObject
      newKeys = compareKeysResult.compareKeys;
  }

  compareKeysResult.identicalKeys = identicalKeys;
  compareKeysResult.differentKeys = differentKeys;
  compareKeysResult.newKeys = newKeys;

  return compareKeysResult;

}


/***
 *     d888b  d88888b d888888b      db      d888888b .d8888. d888888b       .d88b.  d88888b                                    
 *    88' Y8b 88'     `~~88~~'      88        `88'   88'  YP `~~88~~'      .8P  Y8. 88'                                        
 *    88      88ooooo    88         88         88    `8bo.      88         88    88 88ooo                                      
 *    88  ooo 88~~~~~    88         88         88      `Y8b.    88         88    88 88~~~                                      
 *    88. ~8~ 88.        88         88booo.   .88.   db   8D    88         `8b  d8' 88                                         
 *     Y888P  Y88888P    YP         Y88888P Y888888P `8888Y'    YP          `Y88P'  YP                                         
 *                                                                                                                             
 *                                                                                                                             
 *    db   dD d88888b db    db .d8888.      d888888b  .d88b.        .o88b.  .d88b.  .88b  d88. d8888b.  .d8b.  d8888b. d88888b 
 *    88 ,8P' 88'     `8b  d8' 88'  YP      `~~88~~' .8P  Y8.      d8P  Y8 .8P  Y8. 88'YbdP`88 88  `8D d8' `8b 88  `8D 88'     
 *    88,8P   88ooooo  `8bd8'  `8bo.           88    88    88      8P      88    88 88  88  88 88oodD' 88ooo88 88oobY' 88ooooo 
 *    88`8b   88~~~~~    88      `Y8b.         88    88    88      8b      88    88 88  88  88 88~~~   88~~~88 88`8b   88~~~~~ 
 *    88 `88. 88.        88    db   8D         88    `8b  d8'      Y8b  d8 `8b  d8' 88  88  88 88      88   88 88 `88. 88.     
 *    YP   YD Y88888P    YP    `8888Y'         YP     `Y88P'        `Y88P'  `Y88P'  YP  YP  YP 88      YP   YP 88   YD Y88888P 
 *                                                                                                                             
 *                                                                                                                             
 */

/**
 * This looks for keys of a data object based on an array of strings called flagKeys.
 * It will return an array of actual keys from baselineObject that match the search criteria
 * flagKeys example:  ['=Id','Date','By']
 * baselineObject keys:  ['Id','id','UserId','Title','ModifiedDate','CreatedBy','Category1','SubCategory1']
 * 
 * flagStyle = 'Include':  compareKeys = ['Id','ModifiedDate','CreatedBy'], 
 *    NOTE:  UserId would not be returned because criteria '=Id' will look for exact match.
 *    id is not return because search is case sensitive
 * 
 * flagStyle = 'Ignore':  compareKeys = ['id','UserId','Title','Category1','SubCategory1'], 
 *    NOTE:  Id is not included because this it will be ignored.  UserId is included because '=Id' looks for exact match
 *    ModifiedDate && CreatedBy is excluded because setting is ignore for Date and By
 * 
 * @param baselineObject 
 * @param flagKeys 
 * @param flagStyle 
 */

export function getListOfKeysToCompare( baselineObject: any, flagKeys: string[], flagStyle: IIncludeOrIgnore ) {

  let compareKeysResult: ICompareKeysResult = buildEmptyCompareResults( [], flagStyle );

  /**
   * Identify keys to compare using flagKeys and flagStyle
   */

  if ( baselineObject === null || baselineObject === undefined ) {
    compareKeysResult.success = false;

  } else {
      /**
       * Identify keys to compare using flagKeys and flagStyle
       */

      Object.keys(baselineObject).map( ObjectKey => {

          let thisKeyMatchesFlags : any = false;
          flagKeys.map( flagKey => {  //Go through all the flagged keys (like "Id","Date","odata" etc...)
              let partialOrExact = flagKey.indexOf('=') === 0 ? 'Exact' : 'Partial';
              let actualKey = partialOrExact === 'Exact' ? flagKey.substr(1) : flagKey;
      
              if ( partialOrExact === 'Partial' && ObjectKey.indexOf( actualKey) > -1 ) { thisKeyMatchesFlags = true; }
              if ( partialOrExact === 'Exact' && ObjectKey === actualKey ) { thisKeyMatchesFlags = true; }
          });

          if ( flagStyle === 'Include') {
              if ( thisKeyMatchesFlags === true ) { 
                  compareKeysResult.compareKeys.push( ObjectKey ) ; } else { compareKeysResult.ignoredKeys.push( ObjectKey) ;
              }
          } else {
              if ( thisKeyMatchesFlags === true ) { 
                  compareKeysResult.ignoredKeys.push( ObjectKey ) ; } else { compareKeysResult.compareKeys.push( ObjectKey) ;
              }
          }
      } ) ;
  }
  return compareKeysResult;

}

