/***
 *     .d8b.  d8888b. d8888b.  .d8b.  db    db .d8888. 
 *    d8' `8b 88  `8D 88  `8D d8' `8b `8b  d8' 88'  YP 
 *    88ooo88 88oobY' 88oobY' 88ooo88  `8bd8'  `8bo.   
 *    88~~~88 88`8b   88`8b   88~~~88    88      `Y8b. 
 *    88   88 88 `88. 88 `88. 88   88    88    db   8D 
 *    YP   YP 88   YD 88   YD YP   YP    YP    `8888Y' 
 *                                                     
 *                                                     

//Services
import { stringifyKeyValue, spliceCopyArray, addItemToArrayIfItDoesNotExist, convertNumberArrayToRelativePercents, 
    removeItemFromArrayOnce, removeItemFromArrayAll } from '@mikezimm/npmfunctions/dist/Services/Arrays/services';

 */

 /**
  * Functions in this file
  * 
  * export interface ICompareResult
  * export interface 
  * 
  * export function  stringifyKeyValue
  * export function  spliceCopyArray

  * export function  addItemToArrayIfItDoesNotExist
  * export function  convertNumberArrayToRelativePercents

  * export function  removeItemFromArrayOnce
  * export function  removeItemFromArrayAll
  * 
  */

/***
 *    .d8888. d888888b d8888b. d888888b d8b   db  d888b  d888888b d88888b db    db db   dD d88888b db    db db    db  .d8b.  db      db    db d88888b 
 *    88'  YP `~~88~~' 88  `8D   `88'   888o  88 88' Y8b   `88'   88'     `8b  d8' 88 ,8P' 88'     `8b  d8' 88    88 d8' `8b 88      88    88 88'     
 *    `8bo.      88    88oobY'    88    88V8o 88 88         88    88ooo    `8bd8'  88,8P   88ooooo  `8bd8'  Y8    8P 88ooo88 88      88    88 88ooooo 
 *      `Y8b.    88    88`8b      88    88 V8o88 88  ooo    88    88~~~      88    88`8b   88~~~~~    88    `8b  d8' 88~~~88 88      88    88 88~~~~~ 
 *    db   8D    88    88 `88.   .88.   88  V888 88. ~8~   .88.   88         88    88 `88. 88.        88     `8bd8'  88   88 88booo. 88b  d88 88.     
 *    `8888Y'    YP    88   YD Y888888P VP   V8P  Y888P  Y888888P YP         YP    YP   YD Y88888P    YP       YP    YP   YP Y88888P ~Y8888P' Y88888P 
 *                                                                                                                                                    
 *                                                                                                                                                    
 */

/**
 * This just takes an object, and returns a string of the Key and Value.
 * Used for logging
 * @param thisOne 
 * @param keyNo 
 * @param delimiter 
 */
 export function stringifyKeyValue( thisOne: any, keyNo: any, delimiter : string ) {

    return Object.keys(thisOne)[keyNo] + delimiter + thisOne[Object.keys(thisOne)[keyNo]];
  
  }

/***
 *     d888b  d88888b d888888b      .88b  d88.  .d8b.  db    db      d8888b. d8888b.  .d88b.  d8888b.       .d88b.  d88888b      db   dD d88888b db    db 
 *    88' Y8b 88'     `~~88~~'      88'YbdP`88 d8' `8b `8b  d8'      88  `8D 88  `8D .8P  Y8. 88  `8D      .8P  Y8. 88'          88 ,8P' 88'     `8b  d8' 
 *    88      88ooooo    88         88  88  88 88ooo88  `8bd8'       88oodD' 88oobY' 88    88 88oodD'      88    88 88ooo        88,8P   88ooooo  `8bd8'  
 *    88  ooo 88~~~~~    88         88  88  88 88~~~88  .dPYb.       88~~~   88`8b   88    88 88~~~        88    88 88~~~        88`8b   88~~~~~    88    
 *    88. ~8~ 88.        88         88  88  88 88   88 .8P  Y8.      88      88 `88. `8b  d8' 88           `8b  d8' 88           88 `88. 88.        88    
 *     Y888P  Y88888P    YP         YP  YP  YP YP   YP YP    YP      88      88   YD  `Y88P'  88            `Y88P'  YP           YP   YD Y88888P    YP    
 *                                                                                                                                                        
 *    d888888b d8b   db       .d88b.  d8888b.    d88b d88888b  .o88b. d888888b       .d8b.  d8888b. d8888b.  .d8b.  db    db 
 *      `88'   888o  88      .8P  Y8. 88  `8D    `8P' 88'     d8P  Y8 `~~88~~'      d8' `8b 88  `8D 88  `8D d8' `8b `8b  d8' 
 *       88    88V8o 88      88    88 88oooY'     88  88ooooo 8P         88         88ooo88 88oobY' 88oobY' 88ooo88  `8bd8'  
 *       88    88 V8o88      88    88 88~~~b.     88  88~~~~~ 8b         88         88~~~88 88`8b   88`8b   88~~~88    88    
 *      .88.   88  V888      `8b  d8' 88   8D db. 88  88.     Y8b  d8    88         88   88 88 `88. 88 `88. 88   88    88    
 *    Y888888P VP   V8P       `Y88P'  Y8888P' Y8888P  Y88888P  `Y88P'    YP         YP   YP 88   YD 88   YD YP   YP    YP    
 *                                                                                                                           
 *      2021-02-14:  Copied from generic solution                                                                                                                          
 */

export function getMaxPropOfKeyInObjectArray( arr: any[], key: string, find: 'max' | 'min', filterKey?: string, filterTest?: 'eq' | 'neq' , filterVal? : any ) {

    let bestValue = null;

    if ( arr === undefined || arr === null ) { return bestValue ; }
    if ( arr.length === 0 ) { return bestValue ; }

    for (let i in arr){

        let checkKeyVal = arr[i][key];
        let filterKeyVal = filterKey !== undefined ? arr[i][filterKey] : 'Undefined';
        
        let validTest = true;

        if ( checkKeyVal === undefined || checkKeyVal === null) {
            validTest = false;

        } else if ( filterKey && filterTest && filterVal ) {
            if ( filterTest === 'eq') {
                if ( filterKeyVal == null || filterKeyVal == undefined || checkKeyVal !== filterKeyVal ) { validTest = false; }

            } else if ( filterTest === 'neq') {
                if ( filterKeyVal !== null && filterKeyVal !== undefined && checkKeyVal === filterKeyVal ) { validTest = false; }
            }
        }

        if ( validTest === true ) {
            if ( bestValue === null || bestValue === undefined ) {
                bestValue = checkKeyVal;

            } else if ( find === 'max' ) {
                if ( checkKeyVal > bestValue ) {
                    bestValue = checkKeyVal;
                }

            } else if ( find === 'min' ) {
                if ( checkKeyVal < bestValue ) {
                    bestValue = checkKeyVal;
                }

            } // END:  if ( bestValue === null ) {
        } // END:  if ( checkKeyVal ) {
    } // for (let i in arr){

    return bestValue;

}

/**
 *  Typical use case:  arr = ['a','b','c' ]
 *  getNextElementInArray( arr, 'b', 'next, true, 'notfound' ) returns 'c'
 *  getNextElementInArray( arr, 'c', 'next, true, 'notfound' ) returns 'a'
 * 
 * @param arr array should be either numbers or strings, not objects
 * @param current item to search for
 * @param direction direction to search for
 * @param roll true = if it's the last item and you pick 'next' it will get the first item in array etc.
 * @param notFound = return result if not found ( either because current is not in array or roll === false and it's at an end )
 */
export function getNextElementInArray( arr: any[], current: any, direction: 'next' | 'prev' , roll : boolean, notFound: any ) {
    let result: any = null;
    let idx = arr.indexOf(current);

    if ( arr.length === 0 || idx === -1 ) { } //result = notFound; } 
    else if ( arr.length === 1 ) { result = roll === true ? arr[0] : null; }

    else if ( idx === 0  )  { //This is first item in the array
        if ( direction === 'next' ) { result = arr[1]; }
         else { result = roll === true ? arr.length - 1 : null; } }

    else if ( idx === arr.length - 1 ) { //This is the last item in the array
        if ( direction === 'prev' ) { result = arr[idx - 1]; }
        else { result = roll === true ? arr[0] : null; } }

    else { //This is the last item in the array
        result = arr[ direction === 'next' ? idx + 1 : idx - 1 ] ;

    
    }
    if ( result === null ) { 
        result = notFound;
        console.log(' ERROR in getNextElementInArray', arr, current, direction, roll, notFound ) ; }
    return result;

}