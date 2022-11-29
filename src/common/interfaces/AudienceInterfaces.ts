

import { IPropertyPaneDropdownOption_15_2, } from './@msft/IPropertyPaneDropdownOption@1.15.2';


export type IAdminAudience = 'Site Admins';
export type IOwnerAudience = 'Site Owners';
export type IPageEditAudience = 'Page Editors';
export type IItemEditAudience = 'Item Editors';
export type IVisitorAudience = 'Everyone';

export type IFullControlAudience = IAdminAudience | IOwnerAudience;

export const FullControlAudienceChoices: IPropertyPaneDropdownOption_15_2[] = <IPropertyPaneDropdownOption_15_2[]>[  //beAUserAudienceChoicesAll
  {   index: 0,   key: 'Site Admins', text: "Site Admins"  },
  {   index: 1,   key: 'Site Owners', text: "Site Owners"  },
];


export type IPageEditorAudience = IAdminAudience | IOwnerAudience | IPageEditAudience;

export const PageEditorAudienceChoices: IPropertyPaneDropdownOption_15_2[] = <IPropertyPaneDropdownOption_15_2[]>[  //beAUserAudienceChoicesAll
  {   index: 0,   key: 'Site Admins', text: "Site Admins"  },
  {   index: 1,   key: 'Site Owners', text: "Site Owners"  },
  {   index: 2,   key: 'Page Editors', text: "Page Editors"  },
];


export type IItemEditorAudience = IAdminAudience | IOwnerAudience | IPageEditAudience | IItemEditAudience | IVisitorAudience;

export const ItemEditorAudienceChoices: IPropertyPaneDropdownOption_15_2[] = <IPropertyPaneDropdownOption_15_2[]>[  //expandAudienceChoicesAll
  {   index: 0,   key: 'Site Admins', text: "Site Admins"  },
  {   index: 1,   key: 'Site Owners', text: "Site Owners"  },
  {   index: 3,   key: 'Item Editors', text: "Item Editors"  },
];


export type IEditorAudience = IAdminAudience | IOwnerAudience | IPageEditAudience | IItemEditAudience;

export const EditorAudienceChoices: IPropertyPaneDropdownOption_15_2[] = <IPropertyPaneDropdownOption_15_2[]>[  //expandAudienceChoicesAll
  {   index: 0,   key: 'Site Admins', text: "Site Admins"  },
  {   index: 1,   key: 'Site Owners', text: "Site Owners"  },
  {   index: 2,   key: 'Page Editors', text: "Page Editors"  },
  {   index: 3,   key: 'Item Editors', text: "Item Editors"  },
];


export type IEveryoneAudience = IAdminAudience | IOwnerAudience | IPageEditAudience | IItemEditAudience | IVisitorAudience;

export const EveryoneAudienceChoices: IPropertyPaneDropdownOption_15_2[] = <IPropertyPaneDropdownOption_15_2[]>[  //expandAudienceChoicesAll
  {   index: 0,   key: 'Site Admins', text: "Site Admins"  },
  {   index: 1,   key: 'Site Owners', text: "Site Owners"  },
  {   index: 2,   key: 'Page Editors', text: "Page Editors"  },
  {   index: 3,   key: 'Item Editors', text: "Item Editors"  },
  {   index: 4,   key: 'Everyone', text: "Everyone"  },
];

export type IAudienceGroupType = 'Admin' | 'Owner' | 'Page' | 'Item' | 'Editor' | 'Everyone'

