// Copied from SPFx 1.15.2 node_modules\@microsoft\sp-property-pane\dist\index-internal.d.ts


/**
 * PropertyPane drop down component props.
 *
 * @public
 */
 export declare interface IPropertyPaneDropdownProps {
  /**
   * Descriptive label for the Dropdown.
   */
  label: string;
  /**
   * The key of the initially selected option.
   */
  selectedKey?: string | number;
  /**
   * Collection of options for this Dropdown.
   */
  options?: IPropertyPaneDropdownOption_15_2[];
  /**
   * Whether the property pane dropdown option is disabled or not.
   */
  disabled?: boolean;
  /**
   * A description of the dropdown for the benefit of screen reader users.
   */
  ariaLabel?: string;
  /**
   * Defines an element's number or position in the current set of controls.
   * Maps to native aria-posinset attribute. It starts from 1.
   */
  ariaPositionInSet?: number;
  /**
   * Defines the number of items in the current set of controls. Maps to native aria-setsize attribute.
   */
  ariaSetSize?: number;
  /**
   * Custom properties for Dropdown's Callout used to render options.
   */
  calloutProps?: IPropertyPaneDropdownCalloutProps_15_2;
  /* Excluded from this release type: errorMessage */
  /* Excluded from this release type: dataAutomationId */
  /* Excluded from this release type: tooltipProps */
}


/**
 * PropertyPane dropdown callout properties.
 *
 * @public
 */
 export declare interface IPropertyPaneDropdownCalloutProps_15_2 {
  /**
   * Set max height of callout
   * When not set the callout will expand with contents up to the bottom of the screen
   */
  calloutMaxHeight?: number;
}

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
