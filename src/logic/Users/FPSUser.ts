
 import { WebPartContextCopy_15_2 } from '../../indexes/WebPartContext@152';

 // For SPPermissionCopy_15_2:  let addAndCustomizePages = pageContext.web.permissions.hasPermission( SPPermissionCopy_15_2.addAndCustomizePages );
import { SPPermissionCopy_15_2,  } from '../../indexes/WebPermissions@152';

import { IUser, IFPSUser, ISimplePermission } from './IUserInterfaces';
import { checkDeepProperty } from '../Objects/deep';

/**
 * Sets thisWindow.FPSUser = FPSUser; and then returns FPSUser
 * @param context 
 * @param trickyEmails 
 * @param trickyApp 
 * @returns 
 */
export function getFPSUser ( context: WebPartContextCopy_15_2, trickyEmails: string[], trickyApp: string ): IFPSUser {

    const { user, web }  = context.pageContext;
    let startTime = new Date();
    const thisWindow : any = window;
    let currentCultureName = checkDeepProperty(context.pageContext, ['cultureInfo','currentCultureName'], 'ShortError');
    let isSiteAdmin = checkDeepProperty(context.pageContext, ['legacyPageContext','isSiteAdmin'], 'ShortError');

    if ( isSiteAdmin !== true && isSiteAdmin !== false ) { isSiteAdmin = false; }

    let showTricks: any = false;
    trickyEmails.map( getsTricks => {
      if ( user.loginName && user.loginName.toLowerCase().indexOf( getsTricks ) > -1 ) { 
        showTricks = true ;
      }
      } );

    if ( thisWindow.FPSUser ){

      if ( showTricks === true && thisWindow.FPSUser.trickyApps.indexOf( trickyApp ) < 0 ) {
        thisWindow.FPSUser.trickyApps.push( trickyApp );
      }

      return thisWindow.FPSUser;

    } else {
      const userAny: any  = user; //Cast as any where needed... unsure where I got some of these props not on SPUser...
      const userId: number = typeof context.pageContext.legacyPageContext.userId === 'number' ? context.pageContext.legacyPageContext.userId : parseInt(context.pageContext.legacyPageContext.userId);
      const userTitle : string= user.displayName ? user.displayName : userAny.title ? userAny.title : userAny.Title ? userAny.Title : 'Unknown User';

        const FPSUser: IFPSUser = {
            title: userTitle,
            Title: userTitle,
            email: user.email,
            name: userAny.Name ? userAny.Name : userAny.LoginName ? userAny.LoginName : user.loginName,
            id: userId.toString(),
            ID: userId ,
            Id: userId,
            currentCultureName: currentCultureName,
            imageUrl: userAny.imageUrl,
            trickyApps: showTricks === true ? [ trickyApp ] : [],
            PrincipalType: userAny.PrincipalType? userAny.PrincipalType : null,
            isSiteAdmin: isSiteAdmin,
            isGuest: user.isExternalGuestUser,
            manageWeb: web.permissions.hasPermission( SPPermissionCopy_15_2.manageWeb ),
            managePermissions: web.permissions.hasPermission( SPPermissionCopy_15_2.managePermissions ),
            enumeratePermissions: web.permissions.hasPermission( SPPermissionCopy_15_2.enumeratePermissions ),
            addAndCustomizePages: web.permissions.hasPermission( SPPermissionCopy_15_2.addAndCustomizePages ), // aka design
            manageLists: web.permissions.hasPermission( SPPermissionCopy_15_2.manageLists ),// aka edit
            approveItems: web.permissions.hasPermission( SPPermissionCopy_15_2.approveItems ),
            editListItems: web.permissions.hasPermission( SPPermissionCopy_15_2.editListItems ), // aka contribute
            openItems: web.permissions.hasPermission( SPPermissionCopy_15_2.openItems ), // aka read
            simple: 'None',
            crunchTime: -1,

          };

          //'SharePoint' | 'Admin' | 'FullControl' | 'Designer' | 'Editor' | 'Approver' | 'Contributor' | 'Reader' | 'None';
          let simple: ISimplePermission = 'None';
          if ( showTricks === true ) { simple = 'SharePoint' ; }
          else if ( FPSUser.isSiteAdmin === true ) { simple = 'Admin' ; }
          else if ( FPSUser.manageWeb === true ) { simple = 'FullControl' ; }
          else if ( FPSUser.addAndCustomizePages === true ) { simple = 'Designer' ; }
          else if ( FPSUser.manageLists === true ) { simple = 'Editor' ; }
          else if ( FPSUser.approveItems === true ) { simple = 'Approver' ; }
          else if ( FPSUser.editListItems === true ) { simple = 'Contributor' ; }
          else if ( FPSUser.openItems === true ) { simple = 'Reader' ; }
          else { simple = 'None' ; }

          FPSUser.simple = simple;

          let endTime = new Date();
          let totalTime = endTime.getTime() - startTime.getTime();
          FPSUser.crunchTime = totalTime;
          console.log('PermissionCheck Time:', totalTime );

          thisWindow.FPSUser = FPSUser;

          return FPSUser;

    }
}
