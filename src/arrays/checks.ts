
/***
 *     .d8b.  d8888b. d8888b.  .d8b.  db    db .d8888. 
 *    d8' `8b 88  `8D 88  `8D d8' `8b `8b  d8' 88'  YP 
 *    88ooo88 88oobY' 88oobY' 88ooo88  `8bd8'  `8bo.   
 *    88~~~88 88`8b   88`8b   88~~~88    88      `Y8b. 
 *    88   88 88 `88. 88 `88. 88   88    88    db   8D 
 *    YP   YP 88   YD 88   YD YP   YP    YP    `8888Y' 
 *                                                     
 *                                                     

//Checks
import { doesObjectExistInArrayInt, doesObjectExistInArray, compareArrays, getMaxPropOfKeyInObjectArray, getNextElementInArray
    getKeySummary, getKeyChanges
    } from '@mikezimm/npmfunctions/dist/Services/Arrays/checks';

 */

/**
  * export interface ICompareResult
  * export interface 
  * export interface 
  *
  * export function  doesObjectExistInArrayInt
  * export function  doesObjectExistInArray
  * export function  compareArrays
  * export function  getMaxPropOfKeyInObjectArray
  * export function  getNextElementInArray
  * 
  * export function  getKeySummary
  * export function  getKeyChanges

 */

import { stringifyKeyValue } from './services';

import { getHelpfullErrorV2 } from '../Logging/ErrorHandler';

/***
 *    d888888b d8b   db d8888b. d88888b db    db  .d88b.  d88888b       .d8b.  d8b   db db    db       .o88b.  .d8b.  .d8888. d88888b 
 *      `88'   888o  88 88  `8D 88'     `8b  d8' .8P  Y8. 88'          d8' `8b 888o  88 `8b  d8'      d8P  Y8 d8' `8b 88'  YP 88'     
 *       88    88V8o 88 88   88 88ooooo  `8bd8'  88    88 88ooo        88ooo88 88V8o 88  `8bd8'       8P      88ooo88 `8bo.   88ooooo 
 *       88    88 V8o88 88   88 88~~~~~  .dPYb.  88    88 88~~~        88~~~88 88 V8o88    88         8b      88~~~88   `Y8b. 88~~~~~ 
 *      .88.   88  V888 88  .8D 88.     .8P  Y8. `8b  d8' 88           88   88 88  V888    88         Y8b  d8 88   88 db   8D 88.     
 *    Y888888P VP   V8P Y8888D' Y88888P YP    YP  `Y88P'  YP           YP   YP VP   V8P    YP          `Y88P' YP   YP `8888Y' Y88888P 
 *                                                                                                                                    
 *                                                                                                                                    
 */

/**
 * Based on:  https://bobbyhadz.com/blog/javascript-array-contains-string-case-insensitive
 * Any non-string checks will be considered 'not a match'
 * @param checkMe 
 * @param inArray 
 */
export function indexOfAnyCase( checkMe: string, inArray: string[], consoleLog: boolean, alertMe: boolean ) {
    let result = -1;

    //result = inArray.findIndex( element => { //NOTE:  findIndex does not work in my code (typescript error)
    inArray.map( ( element: string, index ) => {
        try {
            if ( element.toLowerCase() === checkMe.toLowerCase() ) { result = index; }
          }catch(e){
            //Sending false, false to getHelpfullErrorV2  because I'm handling that here
            let errMessage: string = getHelpfullErrorV2( e, alertMe, consoleLog, 'indexOfAnyCase ~ 65' );
        }
    });

    return result;

}


/***
 *    d8888b.  .d88b.  d88888b .d8888.       .d88b.  d8888b.    d88b d88888b  .o88b. d888888b      d88888b db    db d888888b .d8888. d888888b      d888888b d8b   db  .d8b.  d8888b. d8888b.  .d8b.  db    db 
 *    88  `8D .8P  Y8. 88'     88'  YP      .8P  Y8. 88  `8D    `8P' 88'     d8P  Y8 `~~88~~'      88'     `8b  d8'   `88'   88'  YP `~~88~~'        `88'   888o  88 d8' `8b 88  `8D 88  `8D d8' `8b `8b  d8' 
 *    88   88 88    88 88ooooo `8bo.        88    88 88oooY'     88  88ooooo 8P         88         88ooooo  `8bd8'     88    `8bo.      88            88    88V8o 88 88ooo88 88oobY' 88oobY' 88ooo88  `8bd8'  
 *    88   88 88    88 88~~~~~   `Y8b.      88    88 88~~~b.     88  88~~~~~ 8b         88         88~~~~~  .dPYb.     88      `Y8b.    88            88    88 V8o88 88~~~88 88`8b   88`8b   88~~~88    88    
 *    88  .8D `8b  d8' 88.     db   8D      `8b  d8' 88   8D db. 88  88.     Y8b  d8    88         88.     .8P  Y8.   .88.   db   8D    88           .88.   88  V888 88   88 88 `88. 88 `88. 88   88    88    
 *    Y8888D'  `Y88P'  Y88888P `8888Y'       `Y88P'  Y8888P' Y8888P  Y88888P  `Y88P'    YP         Y88888P YP    YP Y888888P `8888Y'    YP         Y888888P VP   V8P YP   YP 88   YD 88   YD YP   YP    YP    
 *                                                                                                                                                                                                            
 *                                                                                                                                                                                                            
 */

/**
 * This function checks to see if an element of an array (object) contains a specific property/value pair.
 * 
 * example call:  if ( doesObjectExistInArray(currentFields, 'StaticName', checkField ) ) {
 * This takes an array of field objects (currentFields), and looks to see if any of the objects has a key of StaticName which has a value of checkField variable.
 * 
 * @param sourceArray 
 * @param objectProperty 
 * @param propValue 
 */

 export function doesObjectExistInArrayInt(sourceArray: any[], objectProperty : string, propValue : any, exact : boolean = true ){
    let result = doesObjectExistInArray(sourceArray, objectProperty, propValue, exact );
    if ( result === false ) { return -1 } else { return parseInt( result ) ; }
}

export function doesObjectExistInArray(sourceArray: any[], objectProperty : string, propValue : any, exact : boolean = true ){

    let result : boolean | string = false;

    for (let i in sourceArray){
        let test = false;
        if ( exact === true ) { //2020-10-07:  Added this to allow for Id string to number checks
            test = sourceArray[i][objectProperty] === propValue ? true : false;
        } else {
            test = sourceArray[i][objectProperty] == propValue ? true : false;
        }
        if ( test ) {
            result = i;
            break;
        }
    }

    return result;

}


export interface ICompareResult {
    checkForTheseItems: any [];
    inThisArray: any [];
    found: any [];
    notFound: any [];
    result: any [];
    message: string;
}


/***
 *     .o88b.  .d88b.  .88b  d88. d8888b.  .d8b.  d8888b. d88888b  .d8b.  d8888b. d8888b.  .d8b.  db    db .d8888. 
 *    d8P  Y8 .8P  Y8. 88'YbdP`88 88  `8D d8' `8b 88  `8D 88'     d8' `8b 88  `8D 88  `8D d8' `8b `8b  d8' 88'  YP 
 *    8P      88    88 88  88  88 88oodD' 88ooo88 88oobY' 88ooooo 88ooo88 88oobY' 88oobY' 88ooo88  `8bd8'  `8bo.   
 *    8b      88    88 88  88  88 88~~~   88~~~88 88`8b   88~~~~~ 88~~~88 88`8b   88`8b   88~~~88    88      `Y8b. 
 *    Y8b  d8 `8b  d8' 88  88  88 88      88   88 88 `88. 88.     88   88 88 `88. 88 `88. 88   88    88    db   8D 
 *     `Y88P'  `Y88P'  YP  YP  YP 88      YP   YP 88   YD Y88888P YP   YP 88   YD 88   YD YP   YP    YP    `8888Y' 
 *                                                                                                                 
 *                                                                                                                 
 * The original goal of this function, would be to remove objects from one array if it were in another array.
 * As an example, I have an array of items I want to add to a list (addItemsArray)
 * Then I run a process which creates another 'result' array of what things were actually added - minus any errors
 * The function will remove the items in the 'result' array from the 'addItemsArray.
 * Only the items that were not added (ie the ones that errored out) will be left... or maybe it would add a key with the result.
 * 
  * 
  * @param checkForTheseItems - this is the array of items you want to check for in the sourceArray ('inThisArray')
  * @param inThisArray - this is the array where you are looking for items in
  * @param method - this tells what to do... either flage items in 'inThisArray' with found/not found, or remove the found ones
  * @param keyToCheck - checkForTheseItems must have a key which has this syntax:  checkValue: "Title===Training"
  *                     keyToCheck would === 'checkValue' and the value for that key must have the syntax:  PropertyKey===ValueOfProperty;
  *                     In the example above, it will split Title===Training into ['Title','Training']
  *                     Then look for all items in 'inThisArray' which have the value 'Training' in the key 'Title', and apply the method you want to apply.
  */
 export function compareArrays(checkForTheseItems: any [], inThisArray: any [], method: 'AddTag' | 'ReturnNOTFound' | 'ReturnFound', keyToCheck: string, checkDelimiter : string, messsages: 'Console'|'Alert'|'Both'|'None' ) {
    let compareKey : any = 'compareArrays';
    let foundTag: any = 'Found';
    let notFoundTag = 'Not' + foundTag;
    
    let result : ICompareResult = {
        checkForTheseItems: checkForTheseItems,
        inThisArray: inThisArray,
        found: [],
        notFound: [], 
        result: [],
        message: '',
    };

    let foundCount = 0;
    let notFoundCount = 0;
    let notFoundItems = '';

    //Loop through all the objects you want to check for
    for (let c in checkForTheseItems){

        let foundThisCheck : boolean = false;
        
        //Expecting syntax "Title===Email triage"
        let splitStr : string = checkForTheseItems[c][keyToCheck];

        if ( splitStr ) { //Only check if this has a value for keyToCheck

            let splitArr: string[] = splitStr.split(checkDelimiter);
            let testKey: string = splitArr[0];
            let testVal: string = splitArr[1];
    
            if ( splitArr.length !== 2 ) {
                //There was a problem with the test value... needs to be syntax like this:  "Title===Email triage"
                notFoundItems += '\n???: ' +splitStr;
            } else {
    
                //Loop through all the objects in the 'inThisArray' and process them
                for (let i in inThisArray){
                    let objectToUpdate: any = inThisArray[i];
    
                    if ( inThisArray[i][testKey] === testVal ) {
                        //Value was found.... do whatever needs to be done.
                        objectToUpdate[compareKey] = foundTag;
                        /*
                        if ( method === 'AddTag') { //Add item to result and then add keyTag to it
                            objectToUpdate[compareKey] = foundTag;
                            
                        } else if ( method === 'ReturnNOTFound') { //Do not add this one to the result array
    
    
                        } else if ( method === 'ReturnFound') { //Not sure about this loop yet
    
                        }
                        */
                       
                        foundThisCheck = true;
                        break;
                    }
                }
            }
        }
        if ( foundThisCheck === false  ) { notFoundItems += '\nNotFound: ' +splitStr; checkForTheseItems[c][compareKey] = notFoundTag; }
    }

    
    /** this is where we need to do some other things for other options
     * 
     */

    for (let i in inThisArray){
        let objectToUpdate: any = inThisArray[i];
            //Value was found.... do whatever needs to be done.
            if ( objectToUpdate[compareKey] ) { 
                objectToUpdate[compareKey] = 'Found';
                result.found.push(objectToUpdate);
                foundCount ++;
            } else { 
                objectToUpdate[compareKey] = 'NOTFound';
                result.notFound.push(objectToUpdate);
                notFoundCount ++; 
            }
    }

    result.message = result.notFound.map( thisOne => { 
        return 'NF: ' + stringifyKeyValue(thisOne, 0, '===') + '\n';
    }).join('');

    if (method === 'ReturnFound') {
        result.result = result.found;
    } else if (method === 'ReturnNOTFound') {
        result.result = result.notFound;
    } else if ( method === 'AddTag' ) {
        result.result = result.inThisArray;
    }

    if ( messsages !== 'None' ) {
        console.log('compareArrays - result: ' + method ,result);
    }

    if ( messsages === 'Alert' || messsages === 'Both') {
        //alert('compareArrays - completed! Check Console for results');

        let alertMessage = `Found (${foundCount}) matches in both arrays`;
        if (notFoundCount > 0 ) { 
            alertMessage += '\nCheck Console.log for details';
            alertMessage += `\nDid NOT find these (${notFoundCount}) items!`;
            alertMessage += '\n' + result.message;
        }
        alert( alertMessage );
    }

    return result;

 }


/***
 *     d888b  d88888b d888888b      db   dD d88888b db    db      .d8888. db    db .88b  d88. .88b  d88.  .d8b.  d8888b. db    db 
 *    88' Y8b 88'     `~~88~~'      88 ,8P' 88'     `8b  d8'      88'  YP 88    88 88'YbdP`88 88'YbdP`88 d8' `8b 88  `8D `8b  d8' 
 *    88      88ooooo    88         88,8P   88ooooo  `8bd8'       `8bo.   88    88 88  88  88 88  88  88 88ooo88 88oobY'  `8bd8'  
 *    88  ooo 88~~~~~    88         88`8b   88~~~~~    88           `Y8b. 88    88 88  88  88 88  88  88 88~~~88 88`8b      88    
 *    88. ~8~ 88.        88         88 `88. 88.        88         db   8D 88b  d88 88  88  88 88  88  88 88   88 88 `88.    88    
 *     Y888P  Y88888P    YP         YP   YD Y88888P    YP         `8888Y' ~Y8888P' YP  YP  YP YP  YP  YP YP   YP 88   YD    YP    
 *                                                                                                                                
 *    
 *                                                                                                                             
  * Copied from FoamControl.tsx
  * @param thisDataObjec
  * @param compareTypes Tested values = ['string','number','boolean'];
  * @param ignoreKeys   Tested values = ['element'];
  * @returns 
  */
 export function getKeySummary( baselineObject: any, compareTypes : string[], ignoreKeys : string[], parseMe: boolean ) {

    let keySummary: any = {};

    Object.keys( baselineObject ).map( key => {
      let keyType = typeof baselineObject[key];
      if ( compareTypes.indexOf( keyType ) > -1 && ignoreKeys.indexOf( key ) < 0 ) { 
        keySummary[key] = baselineObject[key];
      } 
    });
  
    if ( parseMe !== false ) { keySummary = JSON.parse( JSON.stringify( keySummary ) ) ; } 

    return keySummary;
 }

 
export const BaseFieldKeys = ['Title','StaticName','TypeAsString','FieldTypeKind','TypeDisplayName','Formula','InternalName','Required','Sealed','CanBeDeleted'];

export const BaseViewKeys = ['Title','Id'];

export const BaseTypeKeys = ['Title','Id'];

export const DoesNotExistLabel = '- >> Does NOT Exist << -';

export const KeyChangeDelimiter = ' >>> ';
 /***
 *     d888b  d88888b d888888b      db   dD d88888b db    db       .o88b. db   db  .d8b.  d8b   db  d888b  d88888b .d8888. 
 *    88' Y8b 88'     `~~88~~'      88 ,8P' 88'     `8b  d8'      d8P  Y8 88   88 d8' `8b 888o  88 88' Y8b 88'     88'  YP 
 *    88      88ooooo    88         88,8P   88ooooo  `8bd8'       8P      88ooo88 88ooo88 88V8o 88 88      88ooooo `8bo.   
 *    88  ooo 88~~~~~    88         88`8b   88~~~~~    88         8b      88~~~88 88~~~88 88 V8o88 88  ooo 88~~~~~   `Y8b. 
 *    88. ~8~ 88.        88         88 `88. 88.        88         Y8b  d8 88   88 88   88 88  V888 88. ~8~ 88.     db   8D 
 *     Y888P  Y88888P    YP         YP   YD Y88888P    YP          `Y88P' YP   YP YP   YP VP   V8P  Y888P  Y88888P `8888Y' 
 *                                                                                                                         
 *                                                                                                                         
 */

 /**
  * getKeyChanges function compares two objects which are similar... and returns the differences.
  *     An example would be versions of a list item.
  *     the keyChanges would compare both arrays to each other and only return the keys which have values that are not equal
  * This is more for converting changes into single label per key notation that is more easily readable
  * 
  * baselineObject = { a: 1, b: 2}  compareObject = { a: 1, b: 3} => result would be newObject = { b: '2 >>> 3' }
  * 
  * 
  * POSSIBLE BREAKING CHANGE VVVVV
  * 
  * 2021-05-18:  REVISED TO START USING 2nd Paramter (now called specificKeys )
  * 
  * TO AVOID ISSUES (this paramter was received but not used in the past) - pass in null or []
  * 
  * @param baselineObject 
  * @param specificKeys ( was keySummary ) - Pass array of specific keys to check, empty or null to use keys in baselineObject
  * @param compareObject 
  * @param parseMe 
  */
 export function getKeyChanges( baselineObject: any, specificKeys: string[], compareObject : any, parseMe: boolean ) {

    let keyChanges : any = {};
    let TestTheseKeys =[];
    
    if ( baselineObject === null || compareObject === null ) {
        TestTheseKeys = BaseFieldKeys;
        // TestTheseKeys = BaseFieldKeys; 
    } else if ( specificKeys !== null && specificKeys !== undefined && specificKeys.length > 0 ) {
        TestTheseKeys = specificKeys;
    } else {
        TestTheseKeys = baselineObject ? Object.keys( baselineObject ) : Object.keys( compareObject );
    }

    TestTheseKeys.map( key => {
        let baselineObjectVal: any = baselineObject ? baselineObject[key] : key === 'Title' ? DoesNotExistLabel : undefined;
        let compareObjectVal: any = compareObject ? compareObject[key] : key === 'Title' ? DoesNotExistLabel : undefined;
        
        //Can't directly compare arrays or objects so you have to stringify them first
        if ( typeof baselineObjectVal === 'object' ) {
            baselineObjectVal = JSON.stringify( baselineObject[key] );
        }

        //Can't directly compare arrays or objects so you have to stringify them first
        if ( typeof compareObjectVal === 'object' ) {
            compareObjectVal = JSON.stringify( compareObject[key] );
        }

        if ( baselineObjectVal !== compareObjectVal ) { 
            let keyChange = baselineObjectVal + KeyChangeDelimiter +  compareObjectVal;

            //Do not make comparisons for these...
            let ignoreCompares = [
                `undefined${KeyChangeDelimiter}null`, 
                `undefined${KeyChangeDelimiter}function(){}`,
                `undefined${KeyChangeDelimiter}[object HTMLDivElement]`,
                `undefined${KeyChangeDelimiter}[object Object]`,  //May want to come back to this one though and add back
                `undefined${KeyChangeDelimiter}`
            ];

            if ( ignoreCompares.indexOf( keyChange ) < 0 && keyChange.indexOf( `undefined${KeyChangeDelimiter}function` ) < 0 ) { 
                keyChanges[key] = keyChange ;
            }
            if ( keyChange === `undefined${KeyChangeDelimiter}[object Object]` ) {
                console.log('OBJECT NOT COMPARED', baselineObjectVal, compareObjectVal );
            }

        } 
    });
  
    if ( parseMe !== false ) { keyChanges = JSON.parse( JSON.stringify( keyChanges ) ) ; } 

    return keyChanges;
 }