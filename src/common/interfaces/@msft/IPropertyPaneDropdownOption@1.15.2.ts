// Copied from SPFx 1.15.2 node_modules\@microsoft\sp-property-pane\dist\index-internal.d.ts

/**
 * PropertyPane drop down options.
 *
 * @public
 */
 export declare interface IPropertyPaneDropdownOption_15_2 {
    /**
     * A key to uniquely identify this option.
     */
     key: string | number;
     /**
      * Text to render for this option.
      */
     text: string;
     /**
      * Index for this option.
      */
     index?: number;
     /**
      * The type of option. If omitted, the default is PropertyPaneDropdownMenuItemType.Normal
      */
    type?: PropertyPaneDropdownOptionType_15_2;
}


/**
 * Specifies the type of option in a dropdown menu rendered by {@link PropertyPaneDropdown}.
 *
 * @public
 */
 export declare enum PropertyPaneDropdownOptionType_15_2 {
    /**
     * Render normal menu item.
     */
     Normal = 0,
     /**
      * Render a divider.
      */
     Divider = 1,
     /**
      * Render menu item as a header.
      */
     Header = 2
}
