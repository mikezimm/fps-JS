

/**
 * Creation of string from HTML entities
 */

/**
 * This can take SharePoint html content ( like from ModernPage CanvasContent1 field and make it readable )
 * @param str 
 * @returns 
 */
 export function replaceHTMLEntities( str: string ) {
    let newStr = str + '';
    // newStr = newStr.replace(/&#123;&quot;/gi,'"');
    newStr = newStr.replace(/&#123;/gi,'{');
    newStr = newStr.replace(/&#125;/gi,'}');

    newStr = newStr.replace(/\\&quot;/gi,'"');
    newStr = newStr.replace(/&quot;/gi,'"');

    newStr = newStr.replace(/\\&apos;/gi,"'");
    newStr = newStr.replace(/&#39;/gi,"'");
    
    newStr = newStr.replace(/&#58;/gi,':');

    newStr = newStr.replace(/&#160;/gi,' ');
    newStr = newStr.replace(/&nbsp;/gi,' ');

    newStr = newStr.replace(/&lt;/gi,'<');
    newStr = newStr.replace(/&#60;/gi,'<');

    newStr = newStr.replace(/&#62;/gi,'>');
    newStr = newStr.replace(/&gt;/gi,'>');

    newStr = newStr.replace(/&#38;/gi,'&');
    newStr = newStr.replace(/&amp;/gi,'&');

    return newStr;
  
  }