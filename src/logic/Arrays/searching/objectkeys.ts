
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

export function getMaxPropOfKeyInObjectArray( arr: any[], key: string, find: 'max' | 'min', filterKey?: string, filterTest?: 'eq' | 'neq' , filterVal? : any ) : any {

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


export function stringifyKeyValue( thisOne: any, keyNo: any, delimiter : string ) : string {

  return Object.keys(thisOne)[keyNo] + delimiter + thisOne[Object.keys(thisOne)[keyNo]];

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
 export function compareArrays(checkForTheseItems: any [], inThisArray: any [], method: 'AddTag' | 'ReturnNOTFound' | 'ReturnFound', keyToCheck: string, checkDelimiter : string, messsages: 'Console'|'Alert'|'Both'|'None' ): ICompareResult {
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
 export function getKeySummary( baselineObject: any, compareTypes : string[], ignoreKeys : string[], parseMe: boolean ) : any {

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
 export function getKeyChanges( baselineObject: any, specificKeys: string[], compareObject : any, parseMe: boolean ): any {

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